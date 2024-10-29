const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const pasajerosRoutes = require("./routes/pasajeros");

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use("/api", pasajerosRoutes);

const PORT = 3001;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
