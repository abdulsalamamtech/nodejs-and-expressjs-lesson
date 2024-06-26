

const express = require('express');
const logger = require('./middlewares/logger');
const notes = require('./routes/notesRoute');
const app = express();

// Setting an env variable
// Mac: export PORT=300
// Win: set PORT=300
const port = process.env.PORT || 3000;


// Enable passing of json obj and url encoded
app.use(express.json());
app.use(express.urlencoded({extended: false}));


// Logger middleware
app.use(logger);

// Home
app.get('/', (req, res) => {
    let home = "welcome to express api";
    console.log(home);
    res.send({"message": home});

});


// Notes resources
app.use('/api/notes', notes);


app.listen(port, () => {
    console.log(`Server is listening on port: ${port}`);
});