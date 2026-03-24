import secrets
from typing import Optional

import bcrypt

from backend.auth.core.config import (
    SEED_SUPER_ADMIN_EMAIL,
    SEED_SUPER_ADMIN_PASSWORD,
)
from backend.auth.core.roles import (
    ROLE_ADMIN_GERAL,
    ROLE_OPERADOR,
    ROLE_SUPER_ADMIN,
    ROLE_VISITANTE,
    ALLOWED_ROLES,
)
from backend.auth.database.db import SessionLocal
from backend.auth.models.user import User


def normalize_email(email: str) -> str:
    return email.strip().lower()


def hash_password(password: str) -> str:
    return bcrypt.hashpw(password.encode(), bcrypt.gensalt()).decode()


def verify_password(password: str, password_hash: str) -> bool:
    return bcrypt.checkpw(password.encode(), password_hash.encode())


def get_user_by_email(email: str) -> Optional[User]:
    db = SessionLocal()
    try:
        normalized_email = normalize_email(email)
        return db.query(User).filter(User.email == normalized_email).first()
    finally:
        db.close()


def authenticate(email: str, password: str) -> Optional[dict]:
    db = SessionLocal()
    try:
        normalized_email = normalize_email(email)
        user = db.query(User).filter(User.email == normalized_email).first()

        if not user:
            return None

        if not user.is_active:
            return None

        if user.role == ROLE_VISITANTE and not user.temporary_password_active:
            return None

        if not verify_password(password, user.password_hash):
            return None

        return {
            "email": user.email,
            "role": user.role,
        }
    finally:
        db.close()


def seed_initial_users():
    if not SEED_SUPER_ADMIN_EMAIL or not SEED_SUPER_ADMIN_PASSWORD:
        raise ValueError(
            "SEED_SUPER_ADMIN_EMAIL e SEED_SUPER_ADMIN_PASSWORD precisam estar definidos no .env"
        )

    db = SessionLocal()
    try:
        admin = (
            db.query(User)
            .filter(User.email == normalize_email(SEED_SUPER_ADMIN_EMAIL))
            .first()
        )

        if not admin:
            admin = User(
                email=normalize_email(SEED_SUPER_ADMIN_EMAIL),
                password_hash=hash_password(SEED_SUPER_ADMIN_PASSWORD),
                role=ROLE_SUPER_ADMIN,
                is_active=True,
                temporary_password_active=False,
            )
            db.add(admin)
            db.commit()
    finally:
        db.close()


def upsert_allowed_user(
    email: str,
    password: str,
    role: str = ROLE_OPERADOR,
    is_active: bool = True,
    temporary_password_active: bool = False,
):
    if role not in ALLOWED_ROLES:
        raise ValueError("Role inválida.")

    db = SessionLocal()
    try:
        normalized_email = normalize_email(email)
        user = db.query(User).filter(User.email == normalized_email).first()

        if user:
            user.password_hash = hash_password(password)
            user.role = role
            user.is_active = is_active
            user.temporary_password_active = temporary_password_active
        else:
            user = User(
                email=normalized_email,
                password_hash=hash_password(password),
                role=role,
                is_active=is_active,
                temporary_password_active=temporary_password_active,
            )
            db.add(user)

        db.commit()
    finally:
        db.close()


def set_temporary_visitor_password(email: str, temporary_password: str):
    upsert_allowed_user(
        email=email,
        password=temporary_password,
        role=ROLE_VISITANTE,
        is_active=True,
        temporary_password_active=True,
    )


def invalidate_temporary_visitor_access(email: str):
    db = SessionLocal()
    try:
        normalized_email = normalize_email(email)
        user = db.query(User).filter(User.email == normalized_email).first()

        if not user:
            return

        if user.role != ROLE_VISITANTE:
            return

        user.password_hash = hash_password(secrets.token_urlsafe(32))
        user.temporary_password_active = False
        db.commit()
    finally:
        db.close()


def get_role_permissions(role: str) -> dict:
    return {
        "can_view": True,
        "can_write": role in {ROLE_OPERADOR, ROLE_ADMIN_GERAL, ROLE_SUPER_ADMIN},
        "can_manage_users": role in {ROLE_ADMIN_GERAL, ROLE_SUPER_ADMIN},
        "is_read_only": role == ROLE_VISITANTE,
    }