const productService = require("../service/product.service");

module.exports = {
    findAll,
    findByDbid,
    create,
    update,
    remove
}

function findAll() {
    return new Promise((resolve, reject) => {
        productService.findAll().then(function (response) {
            resolve(response)
        }).catch(function (error) {
            console.log("Error al consultar producto - controller", error)
            reject(error)
        })
    })
}

function findByDbid(dbid) {
    return new Promise((resolve, reject) => {
        productService.findByDbid(dbid).then(function (response) {
            resolve(response)
        }).catch(function (error) {
            console.log("Error al consultar producto por dbid - controller", error)
            reject(error)
        })
    })
}


function create(user) {
    return new Promise((resolve, reject) => {
        productService.create(user).then(function (response) {
            resolve(response)
        }).catch(function (error) {
            console.log("Error al crear producto - controller", error)
            reject(error)
        })
    })
}

function update(user) {
    return new Promise((resolve, reject) => {
        productService.update(user).then(function (response) {
            resolve(response)
        }).catch(function (error) {
            console.log("Error al actualizar producto - controller", error)
            reject(error)
        })
    })
}

function remove(dbid) {
    return new Promise((resolve, reject) => {
        productService.remove(dbid).then(function (response) {
            resolve(response)
        }).catch(function (error) {
            console.log("Error al eliminar producto - controller", error)
            reject(error)
        })
    })
}
