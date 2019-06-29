const express = require('express');
const router = express.Router();
var db = require('../../models');
var Op = require("sequelize").Op;


//Routes **all routes booked here by default begin with 'api'
//Any reqeusts should only include an extension to this url if desired


router.get('/aisles/:storeId', (req, res) => {
    db.aisle.findAll({ where: {storeId: req.params.storeId}, raw: true})
    .then(function(aisle){
        const aisleIdArr = aisle.map(item => item.id);
        db.item.findAll({
            where: {
                aisleId: {
                    [Op.in]: aisleIdArr
                }
            }
        })
        .then(aisleDetail => res.json(aisleDetail));
    })
 })

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

router.get("/aisleNums/:aisleId", function(req, res){
    db.aisle.findOne({
        where: {
            id: req.params.aisleId
        }
    }).then(function(aisleNum){
        res.json(aisleNum)
    });
});

router.post("/list", (req, res) => {
    const itemNameId = req.body.itemNameId;
    const listId = req.body.listId;
    console.log(req.body);
    db.list_item.create({
        itemNameId: itemNameId,
        listId: listId
    }).then(newList =>
        res.json(newList)
        )
    });

router.get("/list", function(req, res){
    db.list_item.findAll({}).then(list => res.json(list))
});



module.exports = router;