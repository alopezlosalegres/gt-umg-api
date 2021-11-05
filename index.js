"use strict"


const express = require("express");
const app = express();

const bodyParser = require("body-parser")
const log4js = require("log4js")
const port = 3000

log4js.configure({
    appenders: {
        console: {
            type: "console"
        }
    },
    categories: {
        default: {
            appenders: ["console"],
            level: "info"
        }
    }
})

require("dotenv").config({
    path: ".env"
})

try {
    const logger = log4js.getLogger("umg/index.js")
    app.use(bodyParser.json({ limit: '5000mb', extended: true }))

    app.use(function (req, res, next) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header(
            "Access-Control-Allow-Methods",
            "PUT, GET, POST, DELETE, OPTIONS"
        );
        res.header("Access-Control-Allow-Headers", "Content-Type")
        next()
    })
    app.use('/api', require('./routes/routes'));
    app.use('/api/user', require('./routes/user.routes'))
    app.use('/api/product', require('./routes/product.routes'))


    app.listen(port, () => {
        logger.info(
            "umg server is up and running on port number " +
            port +
            " " +
            new Date()
        )
    })
} catch (error) {
    //logger.error(error)
    console.log(error)
}