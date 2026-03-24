import bcrypt
from backend.auth.core.config import ADMIN_PASSWORD, ADMIN_USER
from backend.auth.database.db import SessionLocal
from backend.auth.models.user import User


def authenticate(username: str, password: str) -> bool:
    db = SessionLocal()
    try:
        user = db.query(User).filter(User.username == username).first()

        if not user:
            return False

        return bcrypt.checkpw(password.encode(), user.password.encode())
    finally:
        db.close()


def create_user(username: str, password: str):
    db = SessionLocal()
    try:
        existing_user = db.query(User).filter(User.username == username).first()
        if existing_user:
            return

        hashed = bcrypt.hashpw(password.encode(), bcrypt.gensalt()).decode()
        user = User(username=username, password=hashed)

        db.add(user)
        db.commit()
    finally:
        db.close()


def create_admin_if_not_exists():
    if not ADMIN_USER or not ADMIN_PASSWORD:
        raise ValueError("ADMIN_USER e ADMIN_PASSWORD precisam estar definidos no arquivo .env")

    db = SessionLocal()
    try:
        user = db.query(User).filter(User.username == ADMIN_USER).first()

        if not user:
            hashed = bcrypt.hashpw(ADMIN_PASSWORD.encode(), bcrypt.gensalt()).decode()
            admin = User(username=ADMIN_USER, password=hashed)

            db.add(admin)
            db.commit()
    finally:
        db.close()