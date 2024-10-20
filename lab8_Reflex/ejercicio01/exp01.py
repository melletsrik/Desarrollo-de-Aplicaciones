import reflex as rx
from .styles import titulo_columna, tarjeta_tarea, columna_kanban2, boton, tablero, estilos


class State(rx.State):
    mostrar_solo_pendientes: bool = False 

    def mostrar_pendientes(self):
        self.mostrar_solo_pendientes = True

    def mostrar_todas(self):
        self.mostrar_solo_pendientes = False

def tarjeta_tarea(tarea):
    fondo = estilos["fondo_tarea"].get(tarea['estado'], "#fff") 

    return rx.box(
        rx.text(f"Curso: {tarea['Curso']}", 
                font_size="18px", font_weight="bold", 
                color="#2c3e50"), 
        rx.text(f"Estado: {tarea['estado']}", font_size="16px", color="gray"),
        rx.text(tarea["descripcion"], font_size="14px", color="#7f8c8d", margin_top="5px"),
        style={"background": fondo, **estilos["tarjeta_tarea"]}
    )

def columna_kanban(nombre, tareas):
    return rx.box(
        rx.heading(nombre, style=titulo_columna),
        rx.cond(
            State.mostrar_solo_pendientes,
            rx.vstack(
                *[tarjeta_tarea(tarea) for tarea in tareas if tarea["estado"] == "Pendiente"],  # Solo tareas pendientes
                spacing="10px"
            ),
            rx.vstack(
                *[tarjeta_tarea(tarea) for tarea in tareas],  # Todas las tareas
                spacing="10px"
            )
        ),
        style=columna_kanban2
    )

def index():
    tareas = [
        {"Curso": "Desarrollo", "estado": "Pendiente", "descripcion": "Laboratorio 08"},
        {"Curso": "GDI", "estado": "En Progreso", "descripcion": "Grabar video semana 6"},
        {"Curso": "SIA II", "estado": "Pendiente", "descripcion": "Visitar el institulo del contacto"},
        {"Curso": "Infraestructuras", "estado": "Finalizada", "descripcion": "Configurar Docker para servidores"},
    ]

    # Clasificación de las tareas por estado
    tareas_pendientes = [tarea for tarea in tareas if tarea["estado"] == "Pendiente"]
    tareas_en_progreso = [tarea for tarea in tareas if tarea["estado"] == "En Progreso"]
    tareas_finalizadas = [tarea for tarea in tareas if tarea["estado"] == "Finalizada"]

    return rx.box(
        # Botones para filtrar las tareas
        rx.hstack(
            rx.button("Mostrar Pendientes", on_click=State.mostrar_pendientes, style=boton),
            rx.button("Mostrar Todas", on_click=State.mostrar_todas, style=boton),
            spacing="20px",
        ),
        
        # Renderizar las columnas Kanban
        rx.hstack(
            columna_kanban("Pendientes", tareas_pendientes),
            columna_kanban("En Progreso", tareas_en_progreso),
            columna_kanban("Finalizadas", tareas_finalizadas),
            spacing="20px",
        ),
        style=tablero,
        padding="20px"
    )

app = rx.App()
app.add_page(index, route="/")
app._compile()
