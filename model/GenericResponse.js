class GenericResponse {

    constructor(statusCode, message, body, exception) {
        this.statusCode = statusCode
        this.message = message
        this.body = body
        this.exception = exception
    }
}

module.exports = GenericResponse;