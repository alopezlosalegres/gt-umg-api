const productController = require("../controller/product.controller");


require("dotenv").config({
    path: ".env"
})

var router = require('express').Router();

router.get('/', function(req, res) {
    res.send('Product Index Page');
});

router.get('/findAll', function(req, res) {
    productController.findAll().then(function(response) {
        res.json(response);
    }).catch(function(error) {
        console.log("Error al consultar productos - routes", error)
        res.send(error)
    })
});

router.get("/findByDbid/:dbid", function(req, res) {
    let dbid = req.params.dbid;
    productController.findByDbid(dbid).then(function(response) {
        res.json(response);
    }).catch(function(error) {
        console.log("Error al consultar producto por dbid - routes", error)
        res.send(error)
    })
});

router.post("/create", function(req, res) {
    let product = req.body;
    productController.create(product).then(function(response) {
        res.json(response);
    }).catch(function(error) {
        console.log("Error al crer producto - routes", error)
        res.send(error)
    })
});

router.put("/update", function(req, res) {
    let product = req.body;
    productController.update(product).then(function(response) {
        res.json(response);
    }).catch(function(error) {
        console.log("Error al actualizar producto - routes", error)
        res.send(error)
    })
});

router.delete("/delete/:dbid", function(req, res) {
    let dbid = req.params.dbid;
    productController.remove(dbid).then(function(response) {
        res.json(response);
    }).catch(function(error) {
        console.log("Error al eliminar producto - routes", error)
        res.send(error)
    })
});


module.exports = router;