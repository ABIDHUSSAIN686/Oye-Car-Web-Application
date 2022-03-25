const mongoose = require("mongoose");

const carSchema = mongoose.Schema({
// if array then ->     name : [],
    name : {type : String, require},
    year : {type : Number, require},
    prices : {type : Number, require},
    Mileage : {type : Number, require},
    image : {type : String, require},
},{
    timetamps:true,
})

const carModel = mongoose.model("cars", carSchema);
module.exports = carModel