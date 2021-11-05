const { Product } = require("../db/persistence")
const GenericResponse = require("../model/GenericResponse")

var result;

module.exports = {
    findAll,
    findByDbid,
    create,
    update,
    remove
};

function findAll() {
    return new Promise((resolve, reject) => {
        Product.findAll()
            .then(function(response) {
                result = new GenericResponse(200, "Producto consultados exitosamente", response);
                resolve(result)
            }).catch(function(error) {
                console.log("Error al consultar Producto - service", error.toString())
                result = new GenericResponse(500, "Error al consultar Producto", {}, error.toString());
                reject(result)
            })
    })
}

function findByDbid(dbid) {
    return new Promise((resolve, reject) => {
        Product.findOne({
                where: { dbid: dbid }               
            })
            .then(function(response) {
                if (response) {
                    result = new GenericResponse(200, "Producto consultado exitosamente", response);
                } else {
                    result = new GenericResponse(204, "No se encontro Producto a buscar", response);
                }
                resolve(result)
            }).catch(function(error) {
                console.log("Error al consultar Producto por dbid - service", error.toString())
                result = new GenericResponse(500, "Error al consultar Producto por dbid", {}, error.toString());
                reject(result)
            })
    })
}

function create(product) {
    return new Promise((resolve, reject) => {
        Product.create(product)
            .then(function(response) {
                result = new GenericResponse(200, "Producto creada exitosamente", response);
                resolve(result)
            }).catch(function(error) {
                console.log("Error al crear Producto - service", error.toString())
                result = new GenericResponse(500, "Error al crear Producto", {}, error.toString());
                reject(result)
            })
    })
}

function update(product) {
    return new Promise((resolve, reject) => {
        Product.update(product, {
                where: { dbid: product.dbid }
            })
            .then(function(response) {
                if (response[0] > 0) {
                    result = new GenericResponse(200, "Producto actualizada exitosamente", product);
                } else {
                    result = new GenericResponse(204, "No se encontro Producto a actualizar", {});
                }
                resolve(result)
            }).catch(function(error) {
                console.log("Error al actualizar Producto - service", error.toString())
                result = new GenericResponse(500, "Error al actualizar Producto", {}, error.toString());
                reject(result)
            })
    })
}

function remove(dbid) {
    return new Promise((resolve, reject) => {
        Product.destroy({
                where: { dbid: dbid }
            })
            .then(function(response) {
                if (response > 0) {
                    result = new GenericResponse(200, "Producto eliminado exitosamente", { dbid: dbid });
                } else {
                    result = new GenericResponse(204, "No se encontro Producto a eliminar", {});
                }
                resolve(result)
            }).catch(function(error) {
                console.log("Error al eliminar Producto - service", error.toString())
                result = new GenericResponse(500, "Error al eliminar Producto", {}, error.toString());
                reject(result)
            })
    })
}

