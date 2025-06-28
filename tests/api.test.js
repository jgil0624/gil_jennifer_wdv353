jest.mock("../services/yourService", () => ({
  getItems: jest.fn(),
}));

const request = require("supertest");
const app = require("../app");
const service = require("../services/yourService.js");

describe("API Tests", () => {
  (
    describe("GET /items", () => {
      it("returns results for a valid query", async () => {
        service.getItems.mockResolvedValueOnce([{ name: "Apple" },])
        const res = await request(app).get("/items?search=apple");
        expect(res.statusCode).toBe(200);
        expect(res.body).toEqual([{ name: "Apple" }]);

      });
      it("returns empty array for no results", async () => {
        service.getItems.mockResolvedValueOnce([]);
        const res = await request(app).get("/items?search=xyz");
        expect(res.statusCode).toBe(200);
        expect(res.body).toEqual([]);
      });
    }));
});
  
  

