const express = require("express");
const router = express.Router();
const connection = require("../db");

router.get("/pasajeros/:id", (req, res) => {
    const { id } = req.params;
    connection.query(
        "SELECT * FROM personas WHERE id = ?",
        [id],
        (err, results) => {
            if (err) return res.status(500).send(err);
            res.json(results[0]);
        }
    );
});

router.post("/pasajeros", (req, res) => {
    const { nombre, fechaNacimiento } = req.body;
    connection.query(
        "INSERT INTO personas (nombre, fecha_nacimiento) VALUES (?, ?)",
        [nombre, fechaNacimiento],
        (err) => {
            if (err) return res.status(500).send(err);
            res.status(201).send("Pasajero registrado con éxito");
        }
    );
});

module.exports = router;
