var express = require("express");
var bodyParser = require("body-parser");
var Product = require("../models/products");

var router = express.Router();

router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());
router.use(function (req, res, next) {
  console.log("request");
  next();
});

router
  .route("/products")
  .post(async function (req, res) {
    try {
      const product = new Product({
        name: req.body.name,
        amount: req.body.amount,
        description: req.body.description,
      });

      await product.save();
      res.json({ message: "Producto registrado con éxito" });
    } catch (error) {
      res.status(500).send("Error en el servicio: " + error.message);
    }
  })
  .get(async function (req, res) {
    try {
      const products = await Product.find();
      res.json(products);
    } catch (error) {
      res.status(500).send("Error en el servicio: " + error.message);
    }
  });

module.exports = router;
