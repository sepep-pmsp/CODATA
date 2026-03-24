import os
from dotenv import load_dotenv

load_dotenv()

SEED_SUPER_ADMIN_EMAIL = os.getenv(
    "SEED_SUPER_ADMIN_EMAIL",
    "admin@codata.local"
).strip().lower()

SEED_SUPER_ADMIN_PASSWORD = os.getenv(
    "SEED_SUPER_ADMIN_PASSWORD",
    "123456"
)

SEED_SUPER_ADMIN_ROLE = os.getenv(
    "SEED_SUPER_ADMIN_ROLE",
    "super_admin"
).strip().lower()