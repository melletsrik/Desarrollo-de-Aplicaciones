const express = require('express');
const router = express.Router();
const Libro = require('../Libro');
const mongoose = require('mongoose');

// Obtener todos los libros
router.get('/', async (req, res) => {
    try {
        const libros = await Libro.find();
        res.status(200).json(libros);
    } catch (error) {
        console.error(error); // Imprimir el error en consola para depuración
        res.status(500).json({ mensaje: 'Error al obtener los libros', error });
    }
});

// Crear un nuevo libro
router.post('/', async (req, res) => {
    const { nombre, autor, ISBN, genero, disponible } = req.body;
    try {
        const nuevoLibro = new Libro({ nombre, autor, ISBN, genero, disponible });
        await nuevoLibro.save();
        res.status(201).json(nuevoLibro); // Respuesta con el libro creado
    } catch (error) {
        console.error(error);
        res.status(500).json({ mensaje: 'Error al crear el libro', error });
    }
});

// Actualizar un libro
router.put('/:id', async (req, res) => {
    const { id } = req.params;
    const { nombre, autor, ISBN, genero, disponible } = req.body;
    //valida si el ID es un ObjectId valido de MongoDB
    //los ObjectIds son de 24 caracteres hexadecimales
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({ mensaje: 'ID de libro no válido' });
    }
    try {
        const libroActualizado = await Libro.findByIdAndUpdate(
            id,
            { nombre, autor, ISBN, genero, disponible },
            { new: true } // Devuelve el documento actualizado
        );
        if (!libroActualizado) {
            return res.status(404).json({ mensaje: 'Libro no encontrado' });
        }
        res.status(200).json(libroActualizado); // Respuesta con el libro actualizado
    } catch (error) {
        console.error(error);
        res.status(500).json({ mensaje: 'Error al actualizar el libro', error });
    }
});

// Eliminar un libro
router.delete('/:id', async (req, res) => {
    const { id } = req.params;
    // Validar si el ID es un ObjectId válido de MongoDB
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({ mensaje: 'ID de libro no válido' });
    }
    try {
        const libroEliminado = await Libro.findByIdAndDelete(id);
        if (!libroEliminado) {
            return res.status(404).json({ mensaje: 'Libro no encontrado' });
        }
        res.status(200).json({ mensaje: 'Libro eliminado correctamente' });
    } catch (error) {
        console.error(error); // Imprimir el error en consola para depuración
        res.status(500).json({ mensaje: 'Error al eliminar el libro', error });
    }
});
module.exports = router;