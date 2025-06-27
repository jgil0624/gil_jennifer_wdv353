const request = require("supertest");
const app = require("../app");
const service = require("../services/yourService");

jest.mock("../services/yourService");

describe("API Tests", () => {
  describe("GET/items?search=", () => {
    it("returns results for valid query", async () => {
      service.getItems.mockResolvedValue([{ name: "Apple" }]);
      const res = await request(app).get("/items?search=apple");
      expect(res.statusCode).toBe(200);
      expect(res.body).toEqual([{ name: 'Apple"}[);' }]);
    });
    it("returns empty array for no match", async () => {
      service.getItems.mockResolvedValue([]);
      const res = await request(app).get("/ items?search=xyz");
      expect(res.statusCode).toBe(200);
      expect(res.body).toEqual([]);
    });
  });
});
// SORTING
describe("GET /items?sort=name&order=asc", () => {
  it("sorts items A-Z", async () => {
    service.getItems.mockResolvedValue([{ name: "Apple" }, { name: "Banana" }]);
    const res = await request(app).get("/items?sort=name&order=asc");
    expect(res.body[0]).toBe("Apple");
  });
  it("sorts items Z-A", async () => {
    service.getItems.mockResolvedValue([{ name: "Banana" }, { name: "Apple" }]);
    const res = await request(app).get("/items?sort=name&order=desc");
    expect(res.body[0]).toBe("Banana");
  });
});

// Pagination
describe("GET /items?page=1&limit=2", () => {
  it("returns paginated results", async () => {
    service.getItems.mockResolvedValue([
      { name: "Apple" },
      { name: "Banana" },
      { name: "Cherry" },
    ]);
    const res = await request(app).get("/items?limit=1&skip=1");
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual([{ name: "Banana" }]);
  });
  it("returns empty array for out of range", async () => {
    service.getItems.mockResolvedValue([{ name: "Apple" }, { name: "Banana" }]);
    const res = await request(app).get("/items?limit=2&skip=10");
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual([]);
  });
});
