require("dotenv").config({
    path: ".env"
})

var router = require('express').Router();

router.get('/', function(req, res) {
    res.send('umg is running...');
});


module.exports = router;