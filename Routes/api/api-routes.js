const express = require('express');
const router = express.Router();
var db = require('../../models');
var Op = require("sequelize").Op;


//Routes **all routes booked here by default begin with 'api'
//Any reqeusts should only include an extension to this url if desired
const dummyData = {
    name: {
        test: "greg"
    }
};

// GET /api/sumbit  --> Our Query to the db for the final item/aisle list goes inside here
router.get('/submit', (req, res) => {
    console.log(res)
    // console.log('hit submit route')
    // res.end();
});

router.get('/aisles/:storeId', (req, res) => {
    db.aisle.findAll({ where: {store_id: req.params.storeId}, raw: true})
    .then(function(aisle){
        const aisleIdArr = aisle.map(item => item.aisleId);
        db.item.findAll({
            where: {
                aisle_id: {
                    [Op.in]: aisleIdArr
                }
            }
        })
        .then(aisleDetail => res.json(aisleDetail));
    })
})

// Get /api/whatever --> api route for testing purposes
router.get('/locations', function(req, res){
    db.list.findAll({
        // include: [db.list]
    }).then(function(store) {
        res.json(store);
      });
    // res.json(dummyData);
});




module.exports = router;