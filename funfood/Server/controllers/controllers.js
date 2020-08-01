const restaurantModel = require('../models/RestaurantModel');

async function getAll(_, res) {
    try {
        const restaurants = await restaurantModel.find();
        console.log(restaurants);
        res.status(200);
        res.json(restaurants);
    } catch (error) {
        console.error("error", error);
        res.sendStatus(500);
    }
}
async function createOne(req, res) {
    try {
        console.log(req.body);
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

module.exports = { getAll, createOne }