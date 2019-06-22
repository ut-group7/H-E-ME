const express = require('express');
const router = express.Router();
var db = require('../../models');


//Routes **all routes booked here by default begin with 'api'
//Any reqeusts should only include an extension to this url if desired


// GET /api/sumbit  --> Our Query to the db for the final item/aisle list goes inside here
router.get('/submit', function(req, res){
    console.log('hit submit route')
    res.end();
});

// Get /api/whatever --> api route for testing purposes
router.get('/whatever', function(req, res){
    db.store.findAll({
        include: [db.list]
    }).then(function(store) {
        res.json(store);
      });
});




module.exports = router;