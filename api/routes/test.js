var express = require('express');
var router = express.Router();

var middlewares = require('../utilities/middlewares')

router.all('*', new middlewares().verifyJWT_MW);

/* gettest api */
router.get('/gettest', function(req, res) {
    res.send('gettest authenticated!!');
});

/* posttest api */
router.post('/posttest', function(req, res) {
    res.send('posttest authenticated!!');
});

module.exports = router;
