const { User } = require("../db/persistence")
const GenericResponse = require("../model/GenericResponse")
var bcrypt = require('bcrypt');

var BCRYPT_SALT_ROUNDS = 12;
var result;

module.exports = {
    findAll,
    findByDbid,
    create,
    update,
    remove,
    login
};

function findAll() {
    return new Promise((resolve, reject) => {
        User.findAll()
            .then(function (response) {
                result = new GenericResponse(200, "Usuarios consultados exitosamente", response);
                resolve(result)
            }).catch(function (error) {
                console.log("Error al consultar usuarios - service", error.toString())
                result = new GenericResponse(500, "Error al consultar usuarios", {}, error.toString());
                reject(result)
            })
    })
}

function findByDbid(dbid) {
    return new Promise((resolve, reject) => {
        User.findOne({
            where: { dbid: dbid }
        })
            .then(function (response) {
                if (response) {
                    result = new GenericResponse(200, "Usuario consultado exitosamente", response);
                } else {
                    result = new GenericResponse(204, "No se encontro usuario a buscar", response);
                }
                resolve(result)
            }).catch(function (error) {
                console.log("Error al consultar usuario por dbid - service", error.toString())
                result = new GenericResponse(500, "Error al consultar usuario por dbid", {}, error.toString());
                reject(result)
            })
    })
}

function create(user) {
    return new Promise((resolve, reject) => {
        bcrypt.hash(user.contrasenia, BCRYPT_SALT_ROUNDS)
            .then(function (hashedPassword) {
                user.contrasenia = hashedPassword
                User.create(user)
                    .then(function (response) {
                        result = new GenericResponse(200, "Usuario creado exitosamente", response);
                        resolve(result)
                    }).catch(function (error) {
                        console.log("Error al crear usuario - service", error.toString())
                        result = new GenericResponse(500, "Error al crear usuario", {}, error.toString());
                        reject(result)
                    })
            }).catch(function (error) {
                console.log("Error al crear usuario, hash password - service", error.toString())
                result = new GenericResponse(500, "Error al crear usuario, hash password", {}, error.toString());
                reject(result)
            })
    })
}

function update(user) {
    return new Promise(async (resolve, reject) => {
        let temp = await findByDbid(user.dbid);
        if (temp.statusCode == 200) {
            if (temp.body.contrasenia != user.contrasenia) {
                await bcrypt.hash(user.contrasenia, BCRYPT_SALT_ROUNDS)
                    .then(function (hashedPassword) {
                        user.contrasenia = hashedPassword
                    }).catch(function (error) {
                        console.log("Error al actualizar usuario, hash password - service", error.toString())
                        result = new GenericResponse(500, "Error al actualizar usuario, hash password", {}, error.toString());
                        reject(result)
                    })
            }
            User.update(user, {
                where: { dbid: user.dbid }
            })
                .then(function (response) {
                    if (response[0] > 0) {
                        result = new GenericResponse(200, "Usuario actualizado exitosamente", user);
                    } else {
                        result = new GenericResponse(204, "No se encontro usuario a actualizar", {});
                    }
                    resolve(result)
                }).catch(function (error) {
                    console.log("Error al actualizar usuario - service", error.toString())
                    result = new GenericResponse(500, "Error al actualizar usuario", {}, error.toString());
                    reject(result)
                })
        } else {
            console.log("Error al consultar usuario por dbid en metodo update - service")
            result = new GenericResponse(temp.statusCode, temp.message, temp.body, temp.exception);
            reject(result)
        }
    })
}

function remove(dbid) {
    return new Promise((resolve, reject) => {
        User.destroy({
            where: { dbid: dbid }
        })
            .then(function (response) {
                if (response > 0) {
                    result = new GenericResponse(200, "Usuario eliminado exitosamente", { dbid: dbid });
                } else {
                    result = new GenericResponse(204, "No se encontro usuario a eliminar", {});
                }
                resolve(result)
            }).catch(function (error) {
                console.log("Error al eliminar usuario - service", error.toString())
                result = new GenericResponse(500, "Error al eliminar usuario", {}, error.toString());
                reject(result)
            })
    })
}

function login(user) {
    return new Promise((resolve, reject) => {
        User.findOne({
                where: { nombre: user.nombre }
            })
            .then(async function(response) {
                if (response) {
                    let temp = bcrypt.compareSync(user.contrasenia, response.contrasenia);
                    if (temp) {
                        let user = await findByDbid(response.dbid);
                        result = new GenericResponse(200, "Usuario autenticado exitosamente", user.body);
                        resolve(result)
                    } else {
                        result = new GenericResponse(401, "Contraseña incorrecta", null);
                        resolve(result)
                    }
                } else {
                    result = new GenericResponse(204, "Usuario incorrecto", response);
                    resolve(result)
                }
            }).catch(function(error) {
                console.log("Error al buscar usuario ha autenticar - service", error.toString())
                result = new GenericResponse(500, "Error al buscar usuario ha autenticar", {}, error.toString());
                reject(result)
            })
    })
}