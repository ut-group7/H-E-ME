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
    db.list.findAll({
        where: {
          id: '1'
        },
        include: [{
           model: db.list_item, include: [
               db.item_name
           ]
        }]
      }).then(function(lists) {
        res.json(lists);
      });
    });

router.get('/items', function(req, res){
    db.item_name.findAll({}).then(function(item) {
        res.json(item);
      });
});

router.get('/login/:name', function(req, res){

      db.user.findOne({
        where: {
          username: req.params.name
        }
      }).then(function(user) {
        res.json(user);
      });  
});




module.exports = router;