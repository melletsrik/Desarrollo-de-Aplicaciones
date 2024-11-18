const express = require("express");
const rutasAutenticacion = require("./routes/autentRutas");
const rutasProtegidas = require("./routes/rutasProtegidas");

const app = express();
app.use(express.json());

app.use("/auth", rutasAutenticacion);
app.use("/protected", rutasProtegidas);

module.exports = app;
