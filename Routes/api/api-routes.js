const express = require('express');
const router = express.Router();


//Routes **all routes booked here by default begin with 'api/test'
//Any reqeusts should only include an extension to this url if desired

// GET /api/test
router.get('/', function(req, res){
    console.log('hit target')
    res.end();
});

// Get /api/test/whatever
router.get('/whatever', function(req, res){
    console.log('hit whatever route')
    data = "hello dudes";
    res.send(data);
});


module.exports = router;