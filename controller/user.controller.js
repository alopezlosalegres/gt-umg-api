const userService = require("../service/user.service");

module.exports = {
    findAll,
    findByDbid,
    create,
    update,
    remove,
    login
}

function findAll() {
    return new Promise((resolve, reject) => {
        userService.findAll().then(function(response) {
            resolve(response)
        }).catch(function(error) {
            console.log("Error al consultar usuario - controller", error)
            reject(error)
        })
    })
}

function findByDbid(dbid) {
    return new Promise((resolve, reject) => {
        userService.findByDbid(dbid).then(function(response) {
            resolve(response)
        }).catch(function(error) {
            console.log("Error al consultar usuario por dbid - controller", error)
            reject(error)
        })
    })
}


function create(user) {
    return new Promise((resolve, reject) => {
        userService.create(user).then(function(response) {
            resolve(response)
        }).catch(function(error) {
            console.log("Error al crear usuario - controller", error)
            reject(error)
        })
    })
}

function update(user) {
    return new Promise((resolve, reject) => {
        userService.update(user).then(function(response) {
            resolve(response)
        }).catch(function(error) {
            console.log("Error al actualizar usuario - controller", error)
            reject(error)
        })
    })
}

function remove(dbid) {
    return new Promise((resolve, reject) => {
        userService.remove(dbid).then(function(response) {
            resolve(response)
        }).catch(function(error) {
            console.log("Error al eliminar usuario - controller", error)
            reject(error)
        })
    })
}

function login(user) {
    return new Promise((resolve, reject) => {
        userService.login(user).then(function(response) {
            resolve(response)
        }).catch(function(error) {
            console.log("Error al autenticar usuario - controller", error)
            reject(error)
        })
    })
}