const { model } = require("mongoose");
const { Positionschema } = require("../schemas/Positionschema");

const Positionmodel = model("position", Positionschema);
module.exports = Positionmodel;
