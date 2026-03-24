import bcrypt
from backend.auth.database.db import SessionLocal
from backend.auth.models.user import User
from backend.auth.core.config import ADMIN_USER, ADMIN_PASSWORD


def authenticate(username: str, password: str) -> bool:
    db = SessionLocal()

    user = db.query(User).filter(User.username == username).first()

    if not user:
        db.close()
        return False

    valid = bcrypt.checkpw(password.encode(), user.password.encode())

    db.close()
    return valid


def create_admin_if_not_exists():
    db = SessionLocal()

    user = db.query(User).filter(User.username == ADMIN_USER).first()

    if not user:
        hashed = bcrypt.hashpw(ADMIN_PASSWORD.encode(), bcrypt.gensalt()).decode()

        admin = User(username=ADMIN_USER, password=hashed)

        db.add(admin)
        db.commit()

    db.close()