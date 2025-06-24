const express = require("express");
const router = express.Router();
const Character = require("../models/Character");

//TEMPORARY: Seed test data
router.post("/seed", async (req, res) => {
  console.log("POST test seeding route hit");
  await Character.deleteMany({});
  await Character.insertMany([
    { name: "Aria", age: 22, role: "warrior" },
    { name: "Luna", age: 19, role: "mage" },
    { name: "Kai", age: 25, role: "archer" },
    { name: "Jax", age: 40, role: "assassin" },
  ]);
  res.send("Test data seeded!");
});
module.exports = router;

// GET  your filtered endpoint

router.get("/", async (req, res) => {
  try {
    const { minAge, maxAge, limit = 5, page = 1, sortBy, order } = req.query;

    const sortField = sortBy || "age";
    const sortOrder = order === "desc" ? -1 : 1;

    const query = {};
    if (minAge) query.age = { ...query.age, $gte: Number(minAge) };
    if (maxAge) query.age = { ...query.age, $lt: Number(maxAge) };

    const characters = await Character.find(query)
      .sort({ [sortField]: sortOrder })
      .skip((page - 1) * limit)
      .limit(Number(limit));
    res.json(characters);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
