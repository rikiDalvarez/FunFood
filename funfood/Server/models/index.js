const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/Funfood", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

mongoose.connection.on("error", (err) => console.error("mongoose failed to connect: ", err));
mongoose.connection.once("open", () => console.log("we are connected ⚡️"));
module.exports = mongoose;
