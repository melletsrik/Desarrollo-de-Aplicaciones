import reflex as rx
from rxconfig import config

class State(rx.State):
    conteo: int = 0

    def incrementar(self):
        self.conteo += 1

    def disminuir(self):
        self.conteo -= 1


def render_header() -> rx.Component:
    """Renderiza el encabezado del contador."""
    return rx.heading("Contador", size="9")


def render_count() -> rx.Component:
    """Renderiza el valor actual del conteo."""
    return rx.text(f"Conteo: {State.conteo}", size="5")


def render_buttons() -> rx.Component:
    """Renderiza los botones de incrementar y disminuir."""
    return rx.hstack(
        rx.button("Incrementar", on_click=State.incrementar),
        rx.button("Disminuir", on_click=State.disminuir),
        spacing="5"
    )



def experiencia1() -> rx.Component:
    """Renderiza el contenido del contador en un diseño vertical."""
    return rx.vstack(
        render_header(),
        render_count(),
        render_buttons(),
        spacing="5",
        justify="center",
        min_height="85vh",
    )


def index() -> rx.Component:
    """Función principal que organiza el diseño del componente."""
    return rx.container(
        rx.color_mode.button(position="top-right"),
        experiencia1(),
        rx.logo(),
    )


app = rx.App()
app.add_page(index)

if _name_ == "_main_":
    app.run()