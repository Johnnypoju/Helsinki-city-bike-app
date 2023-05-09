const express = require('express');
const app = express();

const { PORT } = 
const db = require('./util/db');

const PORT = PORT || 3001; 

const start = async () => {
    await db.connectToDatabase();
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });
};

start();
