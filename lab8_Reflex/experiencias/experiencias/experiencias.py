import re
import reflex as rx
import reflex.components.radix.primitives as rdxp
from rxconfig import config
""" 
class State(rx.State):
    conteo: int = 0

    def incrementar(self):
        self.conteo += 1

    def disminuir(self):
        self.conteo -= 1


def render_header() -> rx.Component:
    return rx.heading("Contador", size="9")


def render_count() -> rx.Component:
    return rx.text(f"Conteo: {State.conteo}", size="5")


def render_buttons() -> rx.Component:
    return rx.hstack(
        rx.button("Incrementar", on_click=State.incrementar),
        rx.button("Disminuir", on_click=State.disminuir),
        spacing="5"
    )



def experiencia1() -> rx.Component:
    return rx.vstack(
        render_header(),
        render_count(),
        render_buttons(),
        spacing="5",
        justify="center",
        min_height="85vh",
    ) """

""" class ListState(rx.State):
    items: list[str] = ["Apple", "Banana", "Cherry"]
    input_value: str = ""

    def add_item(self):
        self.items.append(self.input_value)

def render_item(item: rx.Var[str]):
    return rx.list.item(item)

def show_fruits():
    return rx.box(
        rx.foreach(ListState.items, render_item),
    )

def Experiencia2() -> rx.Component:
    return rx.fragment(
        
        rx.input(placeholder="Add new item", on_change=ListState.set_input_value, value=ListState.input_value),
        rx.button("Add Item", on_click=ListState.add_item),
        show_fruits(),
    ) """

class RadixFormState(rx.State):
    # These track the user input real time for validation
    user_entered_username: str
    user_entered_email: str

    # These are the submitted data
    username: str
    email: str

    mock_username_db: list[str] = ["reflex", "admin"]

    @rx.var
    def invalid_email(self) -> bool:
        return not re.match(
            r"[^@]+@[^@]+\.[^@]+", self.user_entered_email
        )

    @rx.var
    def username_empty(self) -> bool:
        return not self.user_entered_username.strip()

    @rx.var
    def username_is_taken(self) -> bool:
        return (
            self.user_entered_username
            in self.mock_username_db
        )

    @rx.var
    def input_invalid(self) -> bool:
        return (
            self.invalid_email
            or self.username_is_taken
            or self.username_empty
        )

    def handle_submit(self, form_data: dict):
        """Handle the form submit."""
        self.username = form_data.get("username")
        self.email = form_data.get("email")


def radix_form_example():
    return rx.flex(
        rx.form.root(
            rx.flex(
                rx.form.field(
                    rx.flex(
                        rx.form.label("Username"),
                        rx.form.control(
                            rx.input(
                                placeholder="Username",
                                # workaround: `name` seems to be required when on_change is set
                                on_change=RadixFormState.set_user_entered_username,
                                name="username",
                            ),
                            as_child=True,
                        ),
                        # server side validation message can be displayed inside a rx.cond
                        rx.cond(
                            RadixFormState.username_empty,
                            rx.form.message(
                                "Username cannot be empty",
                                color="var(--red-11)",
                            ),
                        ),
                        # server side validation message can be displayed by `force_match` prop
                        rx.form.message(
                            "Username already taken",
                            # this is a workaround:
                            # `force_match` does not work without `match`
                            # This case does not want client side validation
                            # and intentionally not set `required` on the input
                            # so "valueMissing" is always false
                            match="valueMissing",
                            force_match=RadixFormState.username_is_taken,
                            color="var(--red-11)",
                        ),
                        direction="column",
                        spacing="2",
                        align="stretch",
                    ),
                    name="username",
                    server_invalid=RadixFormState.username_is_taken,
                ),
                rx.form.field(
                    rx.flex(
                        rx.form.label("Email"),
                        rx.form.control(
                            rx.input(
                                placeholder="Email Address",
                                on_change=RadixFormState.set_user_entered_email,
                                name="email",
                            ),
                            as_child=True,
                        ),
                        rx.form.message(
                            "A valid Email is required",
                            match="valueMissing",
                            force_match=RadixFormState.invalid_email,
                            color="var(--red-11)",
                        ),
                        direction="column",
                        spacing="2",
                        align="stretch",
                    ),
                    name="email",
                    server_invalid=RadixFormState.invalid_email,
                ),
                rx.form.submit(
                    rx.button(
                        "Submit",
                        disabled=RadixFormState.input_invalid,
                    ),
                    as_child=True,
                ),
                direction="column",
                spacing="4",
                width="25em",
            ),
            on_submit=RadixFormState.handle_submit,
            reset_on_submit=True,
        ),
        rx.divider(size="4"),
        rx.text(
            "Username submitted: ",
            rx.text(
                RadixFormState.username,
                weight="bold",
                color="var(--accent-11)",
            ),
        ),
        rx.text(
            "Email submitted: ",
            rx.text(
                RadixFormState.email,
                weight="bold",
                color="var(--accent-11)",
            ),
        ),
        direction="column",
        spacing="4",
    )

def index() -> rx.Component:
    """Función principal que organiza el diseño del componente."""
    return rx.container(
        radix_form_example()
    )


app = rx.App()
app.add_page(index)

if __name__ == "_main_":
    app.run()