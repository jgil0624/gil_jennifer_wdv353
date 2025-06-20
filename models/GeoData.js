const mongoose = require("mongoose");

const GeoDataSchema = new mongoose.Schema({
  location: String,
  latitude: Number,
  longitude: Number,
  data: mongoose.Schema.Types.Mixed,
  date: { type: Date, default: Date.now },
});
module.exports = mongoose.model("GeoData", GeoDataSchema);
