const mongoose = require("./index");

const Schema = mongoose.Schema;
const restaurantModel = new Schema({
    name: { type: String },
    image: { type: String },
    kidsArea: { type: Boolean },
    toys: { type: Boolean },
    kidsMenu: { type: Boolean },
    position: { lat: Number, lng: Number }
});

const Restaurant = mongoose.model("Restaurants", restaurantModel);


module.exports = Restaurant