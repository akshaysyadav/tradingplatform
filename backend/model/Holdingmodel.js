const mongoose = require("mongoose");
const { Holdingschema } = require("../schemas/Holdingschema");

const Holdingmodel = mongoose.model("Holding", Holdingschema);
module.exports = Holdingmodel;
