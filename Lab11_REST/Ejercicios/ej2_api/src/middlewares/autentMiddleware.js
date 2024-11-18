const jwt = require("jsonwebtoken");

exports.autenticarToken = (req, res, next) => {
  const cabeceraAutorizacion = req.headers["authorization"];
  const token = cabeceraAutorizacion && cabeceraAutorizacion.split(" ")[1];

  if (!token)
    return res.status(401).json({ mensaje: "Token no proporcionado" });

  jwt.verify(token, "secreto", (err, usuario) => {
    if (err)
      return res.status(403).json({ mensaje: "Token no válido o expirado" });
    req.usuario = usuario;
    next();
  });
};
