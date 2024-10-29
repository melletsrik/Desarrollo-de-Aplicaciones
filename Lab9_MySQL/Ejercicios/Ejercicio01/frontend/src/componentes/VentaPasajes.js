import React, { useState } from "react";
import axios from "axios";

const VentaPasajes = () => {
    const [id, setId] = useState("");
    const [precioBase, setPrecioBase] = useState(100);
    const [precioFinal, setPrecioFinal] = useState(null);

    const calcularPrecio = async () => {
        try {
            const { data } = await axios.get(`http://localhost:3001/api/pasajeros/${id}`);
            const fechaNacimiento = new Date(data.fecha_nacimiento);
            const edad = new Date().getFullYear() - fechaNacimiento.getFullYear();

            let precio;
            if (edad >= 18) {
                precio = precioBase;
            } else if (edad >= 2) {
                precio = precioBase * 0.75;
            } else {
                precio = 0;
            }
            setPrecioFinal(precio);
        } catch (error) {
            console.error("Error al obtener el pasajero:", error);
        }
    };

    return (
        <div style={styles.formularioContainer}>
            <h2 style={styles.titulo}>Venta de Pasajes Aéreos</h2>
            <label style={styles.label}>ID de Pasajero:</label>
            <input
                type="text"
                value={id}
                onChange={(e) => setId(e.target.value)}
                style={styles.input}
            />
            <label style={styles.label}>Precio Base:</label>
            <input
                type="number"
                value={precioBase}
                onChange={(e) => setPrecioBase(e.target.value)}
                style={styles.input}
            />
            <button onClick={calcularPrecio} style={styles.boton}>
                Calcular Precio
            </button>
            {precioFinal !== null && <p>Precio del Pasaje: ${precioFinal}</p>}
        </div>
    );
};

const styles = {
    formularioContainer: {
        padding: "20px",
        border: "1px solid #ccc",
        borderRadius: "5px",
        backgroundColor: "#f9f9f9",
        width: "400px",
        margin: "auto",
        boxShadow: "2px 2px 10px rgba(0, 0, 0, 0.1)",
    },
    titulo: {
        textAlign: "center",
        color: "#333",
    },
    label: {
        marginTop: "10px",
        display: "block",
        fontWeight: "bold",
    },
    input: {
        width: "100%",
        padding: "10px",
        marginBottom: "15px",
        border: "1px solid #ccc",
        borderRadius: "4px",
    },
    boton: {
        backgroundColor: "#4CAF50",
        color: "white",
        padding: "10px 15px",
        border: "none",
        borderRadius: "4px",
        cursor: "pointer",
        width: "100%",
    },
};

export default VentaPasajes;

