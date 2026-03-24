import reflex as rx

from backend.auth.database.db import Base, engine
from backend.auth.pages.dashboard import dashboard_page
from backend.auth.pages.login import login_page
from backend.auth.services.auth_service import create_admin_if_not_exists
from backend.auth.state.auth_state import AuthState

Base.metadata.create_all(bind=engine)
create_admin_if_not_exists()

app = rx.App()

app.add_page(login_page, route="/")
app.add_page(
    dashboard_page,
    route="/dashboard",
    on_load=AuthState.check_auth,
)