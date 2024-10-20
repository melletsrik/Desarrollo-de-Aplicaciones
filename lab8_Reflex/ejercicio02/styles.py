import reflex as rx

titulo_tarea = {
    "font-size": "18px",
    "font-weight": "bold",
    "color": "#333",
}
estado_tarea = {
    "font-size": "14px",
}
tarjeta_tarea = {
    "border": "1px solid #ccc",
    "padding": "10px",
    "margin": "5px",
    "border-radius": "8px",
    "box-shadow": "0 4px 8px rgba(0, 0, 0, 0.1)",
}

# Estilos de fondo para las tarjetas según el estado
fondo_tarea = {
    "Pendiente": "#FFCCCB",  # Rojo claro
    "En Progreso": "#FFE4B5",  # Naranja claro
    "Finalizada": "#90EE90",  # Verde claro
}

titulo_columna = {
    "font-size": "20px",
    "color": "#333",
    "margin-bottom": "10px",
}
columna_kanban2 = {
    "margin": "10px",
    "padding": "15px",
    "border": "1px solid #333",
    "border-radius": "10px",
    "background": "#F7F9FC",
    "width": "300px",
    "box-shadow": "0 4px 12px rgba(0, 0, 0, 0.1)",
}
boton = {
    "background": "#3498db",
    "color": "white",
    "padding": "12px 24px",
    "border-radius": "8px",
    "margin": "10px",
    "cursor": "pointer",
    "box-shadow": "0 4px 8px rgba(0, 0, 0, 0.2)",
}
tablero = {
    "display": "flex",
    "flexDirection": "row",
    "padding": "20px",
    "background": "#EAF0F6",
    "min-height": "100vh",  # Altura completa de la ventana
}

# Unir todos los estilos en un diccionario
estilos = {
    "titulo_tarea": titulo_tarea,
    "estado_tarea": estado_tarea,
    "tarjeta_tarea": tarjeta_tarea,
    "fondo_tarea": fondo_tarea,  # Agregar el nuevo estilo
}

contador_tarea = {
    "font-size": "16px",
    "font-weight": "bold",
    "margin": "5px 0",
}

contador_pendiente = {"color": "red"}
contador_progreso = {"color": "orange"}
contador_finalizada = {"color": "green"}

estilos.update({
    "contador_tarea": contador_tarea,
    "contador_pendiente": contador_pendiente,
    "contador_progreso": contador_progreso,
    "contador_finalizada": contador_finalizada,
})
