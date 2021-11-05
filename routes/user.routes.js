const userController = require("../controller/user.controller");


require("dotenv").config({
    path: ".env"
})

var router = require('express').Router();

router.get('/', function(req, res) {
    res.send('User Index Page');
});

router.get('/findAll', function(req, res) {
    userController.findAll().then(function(response) {
        res.json(response);
    }).catch(function(error) {
        console.log("Error al consultar usuarios - routes", error)
        res.send(error)
    })
});

router.get("/findByDbid/:dbid", function(req, res) {
    let dbid = req.params.dbid;
    userController.findByDbid(dbid).then(function(response) {
        res.json(response);
    }).catch(function(error) {
        console.log("Error al consultar usuario por dbid - routes", error)
        res.send(error)
    })
});

router.post("/create", function(req, res) {
    let user = req.body;
    userController.create(user).then(function(response) {
        res.json(response);
    }).catch(function(error) {
        console.log("Error al crer usuario - routes", error)
        res.send(error)
    })
});

router.put("/update", function(req, res) {
    let user = req.body;
    userController.update(user).then(function(response) {
        res.json(response);
    }).catch(function(error) {
        console.log("Error al actualizar usuario - routes", error)
        res.send(error)
    })
});

router.delete("/delete/:dbid", function(req, res) {
    let dbid = req.params.dbid;
    userController.remove(dbid).then(function(response) {
        res.json(response);
    }).catch(function(error) {
        console.log("Error al eliminar usuario - routes", error)
        res.send(error)
    })
});

router.post("/login", function(req, res) {
    let user = req.body;
    userController.login(user).then(function(response) {
        res.json(response);
    }).catch(function(error) {
        console.log("Error al autenticar usuario - routes", error)
        res.send(error)
    })
});




module.exports = router;