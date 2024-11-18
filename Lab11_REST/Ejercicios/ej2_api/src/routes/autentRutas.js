const express = require("express");
const { iniciarSesion } = require("../controllers/autentControlador");
const router = express.Router();

router.post("/login", iniciarSesion);

module.exports = router;
