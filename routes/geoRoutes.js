const express = require("express");
const router = express.Router();
const geoController = require("../controllers/geoController");

router.get("/geo-data", geoController.fetchGeoData);
router.post("/get-data", geoController.saveGeoData);
router.get("/geo-data/all", geoController.getGeoDataById);

module.exports = router;
