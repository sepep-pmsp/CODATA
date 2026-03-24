import reflex as rx
from backend.auth.state.auth_state import AuthState


def dashboard_page():
    return rx.vstack(
        rx.heading(f"Bem-vindo {AuthState.current_user}"),
        rx.button("Logout", on_click=AuthState.logout),
    )