const fetch = require("node-fetch");
const GeoData = require("../models/GeoData");

//Get /api/geo-data?lat=..&lon=..
exports.fetchGeoData = async (req, res) => {
  const { lat, lon } = req.query;
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${process.env.API_KEY}`
    );
    const data = await response.json();
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: "API fetch failed" });
  }
};
// Post /api/geo-data
exports.saveGeoData = async (req, res) => {
  try {
    const newData = new GeoData(req.body);
    const saved = await newData.save();
    res.json({ id: saved._id });
  } catch (err) {
    res.status(500).json({ error: "Save to DB Failed" });
  }
};
//get all
exports.getAllGeoData = async (req, res) => {
  try {
    const data = await GeoData.find();
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch data" });
  }
};

//Get by ID
exports.getGeoDataById = async (req, res) => {
  try {
    const data = await GeoData.findById(req.params.id);
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch data by ID" });
  }
};
