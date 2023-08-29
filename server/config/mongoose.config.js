const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1/jokes", {
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(() => console.log("Mongo connection is ready"))
    .catch(err => console.log("Something went wrong with the connection", err));