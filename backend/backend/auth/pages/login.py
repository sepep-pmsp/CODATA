import reflex as rx
from backend.auth.state.auth_state import AuthState


def login_page():
    return rx.center(
        rx.vstack(
            rx.heading("Login"),
            rx.input(
                placeholder="Usuário",
                on_change=AuthState.set_username,
            ),
            rx.input(
                placeholder="Senha",
                type="password",
                on_change=AuthState.set_password,
            ),
            rx.button("Entrar", on_click=AuthState.login),
            rx.text(AuthState.error_message, color="red"),
        ),
        height="100vh",
    )