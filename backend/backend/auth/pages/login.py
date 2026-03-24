import reflex as rx
from backend.auth.state.auth_state import AuthState


def login_page():
    return rx.center(
        rx.vstack(
            rx.heading("Acesso ao sistema", size="7"),
            rx.text(
                "Entre com um email previamente autorizado.",
                color="gray",
            ),
            rx.input(
                placeholder="Email",
                type="email",
                value=AuthState.email,
                on_change=AuthState.set_email,
                width="320px",
            ),
            rx.input(
                placeholder="Senha",
                type="password",
                value=AuthState.password,
                on_change=AuthState.set_password,
                width="320px",
            ),
            rx.button(
                "Entrar",
                on_click=AuthState.login,
                width="320px",
            ),
            rx.cond(
                AuthState.error_message != "",
                rx.text(
                    AuthState.error_message,
                    color="red",
                ),
                rx.fragment(),
            ),
            spacing="4",
            align="center",
        ),
        height="100vh",
    )