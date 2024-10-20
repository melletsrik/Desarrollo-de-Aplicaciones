import reflex as rx
from kanban.styles import *

# Definir la clase de estado para gestionar la variable global de filtrado
class State(rx.State):
    mostrar_solo_pendientes: bool = False  # Control del filtro de tareas

    # Método para cambiar el filtro y mostrar solo tareas pendientes
    def mostrar_pendientes(self):
        self.mostrar_solo_pendientes = True

    # Método para resetear el filtro y mostrar todas las tareas
    def mostrar_todas(self):
        self.mostrar_solo_pendientes = False

# Componente para mostrar una tarjeta de tarea
def tarjeta_tarea(tarea):
    # Obtener el color de fondo según el estado de la tarea
    fondo = estilos["fondo_tarea"].get(tarea['estado'], "#fff")  # Por defecto blanco si no se encuentra el estado

    return rx.box(
        rx.text(f"Curso: {tarea['Curso']}", 
                font_size="18px", font_weight="bold", 
                color="#2c3e50"),  # Texto en tono oscuro
        rx.text(f"Estado: {tarea['estado']}", font_size="16px", color="gray"),
        rx.text(tarea["descripcion"], font_size="14px", color="#7f8c8d", margin_top="5px"),
        style={"background": fondo, **estilos["tarjeta_tarea"]}  # Aplicar el fondo y los estilos
    )

# Componente para mostrar una columna Kanban con tareas
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

#Ejercicio2
def contar_tareas_por_estado(tareas):
    contadores = {}
    for tarea in tareas:
        estado = tarea["estado"]
        contadores[estado] = contadores.get(estado, 0) + 1  # Sumar 1 por cada estado encontrado
    return contadores

# Componente principal que renderiza el tablero Kanban
def index():
    # Lista de ejemplo para las tareas en las diferentes categorías
    tareas = [
        {"Curso": "Desarrollo", "estado": "Pendiente", "descripcion": "Laboratorio 08"},
        {"Curso": "GDI", "estado": "En Progreso", "descripcion": "Grabar video semana 6"},
        {"Curso": "SIA II", "estado": "Pendiente", "descripcion": "Visitar el institulo del contacto"},
        {"Curso": "Infraestructuras", "estado": "Finalizada", "descripcion": "Configurar Docker para servidores"},
        {"Curso": "Infraestructuras", "estado": "Finalizada", "descripcion": "Configurar Docker"},
    ]

    #Ejercicio2
    contadores = contar_tareas_por_estado(tareas)

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

        #Ejercicio2
        rx.vstack(
            rx.text(f"Pendientes: {contadores.get('Pendiente', 0)}", style={**estilos["contador_tarea"], **estilos["contador_pendiente"]}),
            rx.text(f"En Progreso: {contadores.get('En Progreso', 0)}", style={**estilos["contador_tarea"], **estilos["contador_progreso"]}),
            rx.text(f"Finalizadas: {contadores.get('Finalizada', 0)}", style={**estilos["contador_tarea"], **estilos["contador_finalizada"]}),
        )
    )

# Crear la aplicación y añadir la página principal
app = rx.App()
app.add_page(index, route="/")
app._compile()