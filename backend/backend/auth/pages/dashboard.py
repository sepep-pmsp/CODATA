import reflex as rx
from backend.auth.state.auth_state import AuthState


def dashboard_page():
    return rx.center(
        rx.vstack(
            rx.heading("Dashboard", size="7"),
            rx.text(f"Usuária logada: {AuthState.current_user_email}"),
            rx.text(f"Perfil: {AuthState.current_user_role}"),
            rx.cond(
                AuthState.is_read_only,
                rx.vstack(
                    rx.text(
                        "Modo visitante: acesso somente leitura.",
                        color="orange",
                    ),
                    rx.text(
                        "A senha temporária do visitante deixa de valer após o logout.",
                        color="gray",
                    ),
                    spacing="2",
                    align="start",
                ),
                rx.vstack(
                    rx.text("Você tem permissão para usar o sistema conforme seu perfil."),
                    spacing="2",
                    align="start",
                ),
            ),
            rx.button("Logout", on_click=AuthState.logout),
            spacing="4",
            align="center",
        ),
        height="100vh",
    )