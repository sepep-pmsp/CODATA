import reflex as rx
from backend.auth.services.auth_service import authenticate


class AuthState(rx.State):
    username: str = ""
    password: str = ""
    current_user: str | None = None
    error_message: str = ""

    def set_username(self, value: str):
        self.username = value

    def set_password(self, value: str):
        self.password = value

    def login(self):
        if authenticate(self.username, self.password):
            self.current_user = self.username
            self.error_message = ""
            return rx.redirect("/dashboard")
        else:
            self.error_message = "Usuário ou senha inválidos"

    def logout(self):
        self.current_user = None
        return rx.redirect("/")

    def check_auth(self):
        if not self.current_user:
            return rx.redirect("/")