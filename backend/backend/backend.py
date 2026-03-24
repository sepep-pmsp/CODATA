import reflex as rx

from backend.auth.database.db import Base, engine
from backend.auth.pages.dashboard import dashboard_page
from backend.auth.pages.login import login_page
from backend.auth.services.auth_service import seed_initial_users
from backend.auth.state.auth_state import AuthState

Base.metadata.create_all(bind=engine)
seed_initial_users()

app = rx.App()

app.add_page(
    login_page,
    route="/",
    on_load=AuthState.redirect_if_authenticated,
)

app.add_page(
    dashboard_page,
    route="/dashboard",
    on_load=AuthState.check_auth,
)