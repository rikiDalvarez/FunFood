const restaurantModel = require('../models/RestaurantModel');

async function getAll(_, res) {
    try {
        const restaurants = await restaurantModel.find();
<<<<<<< HEAD
=======

>>>>>>> 5782893df9001e05c47c15fc971f833347d2f34d
        res.status(200);
        res.json(restaurants);
    } catch (error) {
        console.error("error", error);
        res.sendStatus(500);
    }
}
async function createOne(req, res) {
    try {
<<<<<<< HEAD
=======


>>>>>>> 5782893df9001e05c47c15fc971f833347d2f34d
        const restaurant = await restaurantModel.create(
            {
                name: req.body.name,
                image: req.body.image,
                kidsArea: req.body.kidsArea,
                toys: req.body.toys,
                kidsMenu: req.body.kidsMenu,
                position: { lat: req.body.position.lat, lng: req.body.position.lng }
            });
        res.status(201);
        res.json(restaurant);
    } catch (error) {
        console.log("Error: ", error);
        res.sendStatus(500);
    }
}

<<<<<<< HEAD
=======

>>>>>>> 5782893df9001e05c47c15fc971f833347d2f34d
async function updateOne(req, res) {
    try {
        const updateRestaurant = await restaurantModel.findOneAndUpdate(
            { _id: req.params.id },
            { image: req.body.image },
            { useFindAndModify: false, new: true },

        );
        //     const restaurant = await restaurantModel.findOneAndUpdate({ id: id }, {
        //         image: req.body.image,
        //     });
        console.log(updateRestaurant)
        res.status(201);
        res.send(updateRestaurant)
    } catch (error) {
        console.log("Error: ", error);
        res.sendStatus(500);
    }
}



<<<<<<< HEAD
module.exports = { getAll, createOne, updateOne }
=======
module.exports = { getAll, createOne, updateOne }


>>>>>>> 5782893df9001e05c47c15fc971f833347d2f34d
