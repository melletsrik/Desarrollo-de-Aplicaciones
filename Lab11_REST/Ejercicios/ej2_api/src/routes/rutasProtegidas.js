const express = require("express");
const { autenticarToken } = require("../middlewares/autentMiddleware");
const router = express.Router();

const tareas = [
  { id: 1, tarea: "Completar el proyecto de Node.js", completada: false },
  { id: 2, tarea: "Revisar correos", completada: true },
  { id: 3, tarea: "Hacer la compra", completada: false },
];

router.get("/", autenticarToken, (req, res) => {
  res.json({
    mensaje: `Bienvenido a tu lista de tareas, ${req.usuario.username}`,
    tareas: tareas,
  });
});

module.exports = router;
