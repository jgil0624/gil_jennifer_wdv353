# Unit Testing Your API Assigment

This projectdemonstrates how to write unit tests for a RESTful API using **Jest** and **Supertest**. The tests focus on query features like filtering, sorting, and pagination. All tests are mocked to stimulate service responses without requiring a live database.

## Project Structure

--app.js
--server.js
--controllers/
-yourController.js
--services/
-yourService.js
--routes/
yourRoutes.js
--tests/
api.test.js

## Features Tested

1. Filtering
   -Tests return of matching items.
   -Tests response for no matches.
2. Sorting
   -Verifies ascending and descending order.
3. Pagination
   -Tests sliced results based on skip/limit.
   -Tests response when skip is out of the range.

## Testing

All tests are written using [Jest] (https://jestjs.io) and [Supertest] (https://www.npmjs.com/package/supertest).
Service methods are **mocked** using `jest.mock()` so tests can run independently of a live backend.

## Run Tests:

npm install
npm test
