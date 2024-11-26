const mongoose = require('mongoose');
const libroSchema = new mongoose.Schema({
    nombre: { type: String, required: true },
    autor: { type: String, required: true },
    ISBN: { type: String, required: true },
    genero: { type: String, required: true },
    disponible: { type: Boolean, default: true },
});
module.exports = mongoose.model('Libro', libroSchema);