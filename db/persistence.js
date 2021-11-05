require("dotenv").config({
    path: ".env"
});

const log4js = require("log4js")
const logger = log4js.getLogger("umg/persistence")
const Sequelize = require("sequelize");

const UserModel = require('../model/User')
const ProductModel = require('../model/Product')

const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD, {
    dialect: process.env.DB_DIALECT,
    host: process.env.DB_HOST,    
    operatorsAliases: 0,
    pool: {
        max: 10,
        idle: 30000,
        acquire: 60000
    },
    logging: false,
    timezone: '-06:00'
})

const Op = Sequelize.Op

const User = UserModel(sequelize, Sequelize)
const Product = ProductModel(sequelize, Sequelize)

sequelize
    .sync({
        force: false
    }).then(() => {
        logger.info("Base de datos lista y funcionando.");
    })

const sequ = sequelize;

module.exports = {
    Op,
    sequ,
    User,
    Product
};