
const environment = require('./configs/environment.config');
const db = require('./configs/db.config');

const express = require('express');
const logger = require('./middlewares/logger');
const notes = require('./routes/notesRoute');
const app = express();

// Setting an env variable
// Mac: export PORT=3000
// Win: set PORT=3000


// Enable passing of json obj and url encoded
app.use(express.json());
app.use(express.urlencoded({extended: false}));


// Logger middleware
app.use(logger);


// Home
app.get('/', (req, res) => {
    let home = "welcome to express api";
    console.log(parseInt(environment.port));
    res.send({"message": home});

});


// Notes resources
app.use('/api/notes', notes);


// Mongodb notes
app.get('/notes', async (req, res) => {
    // let coll = await db.collection('notes');
    // let results = await coll.find({}).toArray();
    res.json(db).status(200);
});


app.listen(environment.port, () => {
    console.log(`Server is listening on port: ${environment.port}`);
});