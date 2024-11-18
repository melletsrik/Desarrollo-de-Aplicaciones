const jwt = require("jsonwebtoken");

exports.iniciarSesion = (req, res) => {
  const { usuario, contrasena } = req.body;

  if (usuario === "ricky109" && contrasena === "qwerty12345") {
    const token = jwt.sign({ username: usuario }, "secreto", {
      expiresIn: "1h",
    });
    res.json({
      mensaje: `Inicio de sesión exitoso, bienvenido ${usuario}`,
      token,
    });
  } else {
    res.status(401).json({ mensaje: "Credenciales inválidas" });
  }
};
