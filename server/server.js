const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 5050;

app.use(cors());
app.use(express.json());

// Sample data
const items = [
    { id: 1, name: 'Magic Book' },
    { id: 2, name: 'Rabbit' }
];

// API Route
app.get('/api/items', (req, res) => {
    console.log('GET /api/items was hit');
    res.json(items);
});
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`)

});