import re
import reflex as rx
import reflex.components.radix.primitives as rdxp
from rxconfig import config
import httpx

""" class State(rx.State):
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
""" 
class ListState(rx.State):
    items: list[str] = []
    input_value: str = ""

    def add_item(self):
        self.items.append(self.input_value)
    def deletall(self):
        self.items = []

def render_item(item: rx.Var[str]):
    return rx.list.item(item)

def show_fruits():
    return rx.box(
        rx.foreach(ListState.items, render_item),
    )

def experiencia2() -> rx.Component:
    return rx.fragment(
        
        rx.input(placeholder="Nueva tarea", on_change=ListState.set_input_value, value=ListState.input_value),
        rx.button("Añade una tarea", on_click=ListState.add_item),
        show_fruits(),
        rx.button("Borrar todo", on_click=ListState.deletall)     ,
    ) """


""" 
class RadixFormState(rx.State):
    # Inicializamos valores por defecto
    user_entered_username: str = ""
    user_entered_email: str = ""
    user_entered_text: str = ""  # Nuevo campo de texto
    username: str = ""
    email: str = ""
    text: str = ""  # Campo para almacenar el texto enviado
    mock_username_db: list[str] = ["reflex", "admin"]

    @rx.var
    def invalid_email(self) -> bool:
        return not re.match(r"[^@]+@[^@]+\.[^@]+", self.user_entered_email)

    @rx.var
    def username_empty(self) -> bool:
        return not self.user_entered_username.strip()

    @rx.var
    def username_is_taken(self) -> bool:
        return self.user_entered_username in self.mock_username_db

    @rx.var
    def input_invalid(self) -> bool:
        return self.invalid_email or self.username_is_taken or self.username_empty

    # Actualizamos los valores de los inputs sin `set_state`
    def set_user_entered_username(self, value):
        self.user_entered_username = value  # Se actualiza directamente

    def set_user_entered_email(self, value):
        self.user_entered_email = value  # Se actualiza directamente

    def set_user_entered_text(self, value):  # Nuevo setter para el campo de texto adicional
        self.user_entered_text = value  # Se actualiza directamente

    def handle_submit(self, form_data: dict):
        self.username = form_data.get("username", "")
        self.email = form_data.get("email", "")
        self.text = form_data.get("text", "")  # Almacenamos el texto enviado

# Función para crear el formulario
def experiencia3():
    return rx.flex(
        rx.form.root(
            rx.flex(
                rx.form.field(
                    rx.flex(
                        rx.form.label("Usuario"),
                        rx.input(
                            placeholder="Usuario",
                            # Se maneja correctamente el valor
                            on_change=lambda value: RadixFormState.set_user_entered_username(value),
                            name="username",
                        ),
                        # Mensajes de validación
                        rx.cond(
                            RadixFormState.username_empty,
                            rx.form.message(
                                "Usuario no puede estar vacio",
                                color="var(--red-11)",
                            ),
                        ),
                        rx.form.message(
                            "Username already taken",
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
                        rx.form.label("Correo Electronico"),
                        rx.input(
                            placeholder="Correo Electronico",
                            # Se maneja correctamente el valor
                            on_change=lambda value: RadixFormState.set_user_entered_email(value),
                            name="email",
                        ),
                        rx.form.message(
                            "Un Correo Electronico valido es necesario",
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
                # Añadimos un nuevo campo de texto
                rx.form.field(
                    rx.flex(
                        rx.form.label("Texto adicional"),
                        rx.text_area( 
                            placeholder="Texto adicional",
                            # Se maneja correctamente el valor
                            on_change=lambda value: RadixFormState.set_user_entered_text(value),
                            name="text",
                        ),
                        direction="column",
                        spacing="2",
                        align="stretch",
                    ),
                    name="text",
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
            "Usuario subido: ",
            rx.text(
                RadixFormState.username,
                weight="bold",
                color="var(--accent-11)",
            ),
        ),
        rx.text(
            "Correo subido: ",
            rx.text(
                RadixFormState.email,
                weight="bold",
                color="var(--accent-11)",
            ),
        ),
        rx.text(
            "Texto subido: ",
            rx.text(
                RadixFormState.text,
                weight="bold",
                color="var(--accent-11)",
            ),
        ),
        direction="column",
        spacing="4",
    )
 """


from typing import List, Dict 

# Función para obtener datos de la API externa
# Función para obtener datos de la API externa
async def obtener_datos_api():
    async with httpx.AsyncClient() as cliente:
        respuesta = await cliente.get("https://jsonplaceholder.typicode.com/posts")
        respuesta.raise_for_status()  # Asegurarse de que la solicitud fue exitosa
        return respuesta.json()  # Retornar los datos en formato JSON

# Clase de estado para manejar los datos obtenidos de la API
class EstadoDatosAPI(rx.State):
    datos: List[Dict[str, str]] = []  # Definimos la variable `datos` como lista

    # Función para cargar los datos desde la API y actualizar el estado
    async def cargar_datos(self):
        self.datos = await obtener_datos_api()  # Actualizamos los datos con la respuesta de la API

# Función que muestra el componente de datos obtenidos de la API
def experiencia4():
    return rx.fragment(
        # Botón para cargar los datos de la API
        rx.button("Cargar Datos", on_click=EstadoDatosAPI.cargar_datos),
        
        # Lista de datos obtenidos, se renderiza una lista de elementos
        rx.foreach(
            EstadoDatosAPI.datos,  # Iteramos sobre los datos
            lambda dato: rx.list_item(
                rx.text(f"Título: {dato['title']}"),  # Accedemos directamente a las claves del diccionario
                rx.text(f"Contenido: {dato['body']}"),
            )
        )
    )
def index() -> rx.Component:
    """Función principal que organiza el diseño del componente."""
    return rx.container(
        experiencia4()
    )


app = rx.App()
app.add_page(index)

if __name__ == "_main_":
    app.run()