const mongoose = require("mongoose");
const Positionschema = require("../schemas/Positionschema");

const Positionmodel = mongoose.model("Position", Positionschema);
module.exports = Positionmodel;
