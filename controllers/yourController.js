const service = require("../services/yourService");

exports.getItems = async (req, res) => {
  try {
    const allItems = await service.getItems();
    let items = Array.isArray(allItems) ? [...allItems] : [];
    // Filtering
    if (req.query.search) {
      items = items.filter((item) =>
        item.name.toLowerCase().includes(req.query.search.toLowerCase())
      );
    }
    // Sorting
    if (req.query.sort && req.query.order) {
      items.sort((a, b) => {
        if (req.query.order === "asc") {
          return a.name.localeCompare(b.name);
        } else {
          return b.name.localeCompare(a.name);
        }
      });
    }
    // Pagination
    const skip = parseInt(req.query.skip) || 0;
    const limit = parseInt(req.query.limit) || items.length;
    items = items.slice(skip, skip + limit);
    res.status(200).json(items);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};
