# Character API with MongoDB

This project sets up an Express API connect to MongoDB that allows:

- Seeding test character data (`POST /seed`)
- Filtering, sorting, and paginating character data (`GET /`)

## Setup

1. Clone the repo or download the zip
2. Run `npm install`
3. Set up .env file with your local Mongo URI:
   ex: MONGO_URI=mongodb://127.0.0.1:27017/apiquery
   PORT=3000

## Routes

- **POST /seed** - Seeds test data
- **GET /** optional query parameters:
  - `minAge`, `maxAge`
  - `sortOrder`, `order`
  - `page`, `limit`

## Example

`GET /?minAge=20&sortBy=age&order=desc&page=1&1limit=2`

## Author

Jennifer Gil
