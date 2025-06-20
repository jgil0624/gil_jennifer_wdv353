# 3.3 Geospatial Data API Project

# Description

This Node.js application integrates a public geospatial API with MongoDB to fetch, store, retrieve geographic data based on user-provided coordinates. It uses Express for routing and Mongoose to manage data in MongoDB.

# How to Run the Project

- Clone your repository
- git clone https://github./yourusername/your-repo-name
- cd your repo name

# Install Dependencies:

- npm install

# Set up Environment Variables

- create a .env file in the root folder

# Start the Server

- node server.js

# API Routes

GET /api/geo-data?lat={latitude}&lon={longitude}
.Fetches geospatial data from the external API based on coordinates

.Returns the response directly to the client

POST /api/geo-data
. Accepts a geospatial data object in the request body.
. Saves it to MongoDB and returns the document's ID.

GET /api/geo-data
.Returns all saved geospatial data from MongoDB

GET /api/geo-data/:id
. Retrieves a specific document from MongoDB using its ID

# Technologies used

. Node.js
. Express
. MongoDB & Mongoose
. dotenv
. node-fetch

# API used

OpenWeatherMap
.Endpoint https://api.openweathermap.org/data/2.5/weather
.API key required (free tier available)
