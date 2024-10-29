import React, { useState } from "react";
import axios from "axios";

const Inscripcion = () => {
    const [id, setId] = useState("");
    const [nombre, setNombre] = useState("");
    const [fechaNacimiento, setFechaNacimiento] = useState("");

    const handleRegistro = async () => {
        try {
            await axios.post("http://localhost:3001/api/pasajeros", {
                id,
                nombre,
                fechaNacimiento,
            });
            alert("Registro exitoso");
            setId("");
            setNombre("");
            setFechaNacimiento("");
        } catch (error) {
            console.error("Error al registrar:", error);
        }
    };

    return (
        <div style={styles.formularioContainer}>
            <h2 style={styles.titulo}>Registro de Pasajero</h2>
            <label style={styles.label}>ID de Pasajero:</label>
            <input
                type="text"
                value={id}
                onChange={(e) => setId(e.target.value)}
                placeholder="ID del Pasajero"
                style={styles.input}
            />
            <label style={styles.label}>Nombre Completo:</label>
            <input
                type="text"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
                placeholder="Nombre Completo"
                style={styles.input}
            />
            <label style={styles.label}>Fecha de Nacimiento:</label>
            <input
                type="date"
                value={fechaNacimiento}
                onChange={(e) => setFechaNacimiento(e.target.value)}
                style={styles.input}
            />
            <button onClick={handleRegistro} style={styles.boton}>
                Registrar
            </button>
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

export default Inscripcion;
