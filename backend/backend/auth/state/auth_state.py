import reflex as rx

from backend.auth.core.roles import ROLE_VISITANTE
from backend.auth.services.auth_service import (
    authenticate,
    get_role_permissions,
    invalidate_temporary_visitor_access,
    normalize_email,
)


class AuthState(rx.State):
    email: str = ""
    password: str = ""
    current_user_email: str = rx.Cookie(name="auth_current_user_email", path="/")
    current_user_role: str = rx.Cookie(name="auth_current_user_role", path="/")
    error_message: str = ""

    def set_email(self, value: str):
        self.email = normalize_email(value)

    def set_password(self, value: str):
        self.password = value

    def login(self):
        auth_data = authenticate(self.email, self.password)
        self.password = ""

        if auth_data:
            self.current_user_email = auth_data["email"]
            self.current_user_role = auth_data["role"]
            self.error_message = ""
            return rx.redirect("/dashboard")

        self.error_message = "Email ou senha inválidos, ou acesso não autorizado."

    def logout(self):
        if self.current_user_role == ROLE_VISITANTE and self.current_user_email:
            invalidate_temporary_visitor_access(self.current_user_email)

        self.current_user_email = ""
        self.current_user_role = ""
        self.email = ""
        self.password = ""
        self.error_message = ""
        return rx.redirect("/")

    def check_auth(self):
        if not self.current_user_email:
            return rx.redirect("/")

    def redirect_if_authenticated(self):
        if self.current_user_email:
            return rx.redirect("/dashboard")

    @rx.var
    def is_read_only(self) -> bool:
        return self.current_user_role == ROLE_VISITANTE

    @rx.var
    def can_write(self) -> bool:
        return get_role_permissions(self.current_user_role).get("can_write", False)

    @rx.var
    def can_manage_users(self) -> bool:
        return get_role_permissions(self.current_user_role).get("can_manage_users", False)