const express = require('express');
const sqlite3 = require('sqlite3').verbose();

const app = express();
const port = 3000;

app.use(express.json()); 
app.use(express.urlencoded({ extended: true })); 

// Connect to SQLite database (or create if it doesn't exist)
const db = new sqlite3.Database('./snacks.db', (err) => {
    if (err) {
        console.error('Error opening database:', err.message);
    } else {
        console.log('Connected to the SQLite database.');
        db.run(`
            CREATE TABLE IF NOT EXISTS snacks (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                name TEXT,
                description TEXT,
                price REAL
            )
        `);
    }
});

// Make these routes work:

// 1. Get all snacks


// 2. Get a single snack by ID


// 3. Add a new snack (and return the full created object)


// 4. Update a snack by ID (and return the full updated object)


// 5. Delete a snack by ID


// Start the server
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
