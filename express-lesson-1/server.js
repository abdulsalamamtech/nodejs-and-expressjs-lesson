const express = require('express');
const app = express();

// Setting an env variable
// Mac: export PORT=300
// Win: set PORT=300
const port = process.env.PORT || 3000;


// Enable passing of json obj
app.use(express.json());
// app.use(express.urlencoded(), {});

app.get('/', (req, res) => {
    // console.log("Welcome: ", req, res);
    console.log('welcome to express api');
    res.send({"message": "welcome home!"});
});


// notes
let notes = [
    {
        "id": 1,
        "title": "note one",
        "content": "this is my first note"
    },
    {
        "id": 2,
        "title": "note two",
        "content": "this is my second note"
    },
    {
        "id": 3,
        "title": "note three",
        "content": "this is my third note"
    },
];



// Get all notes
app.get('/api/notes', (req, res) => {
    res.json(notes);
});


// Get a single note
app.get('/api/notes/:id', (req, res) => {
    let id = parseInt(req.params.id);
    let note = notes.find((note) => note.id === id);

    if(!note){
        return res.status(404).json({"massage": "not found"})
    }
    res.json(note);
});


// Delete a note
app.delete('/api/notes/:id', (req, res) => {
    let id = parseInt(req.params.id);

    // Find the note
    let findNote = notes.find((note) => note.id === id);
    if(!findNote){
        return res.status(404).json({"massage": "resource not found"})
    }

    // Send the undeleted notes
    let note = notes.filter((note) => note.id !== id);
    res.json(note);
});

// Post a note
app.post('/api/notes', (req, res) => {
    let body = req.body;
    // validation of data
    if(!body.title || !body.content){
        return res.status(400).json({"massage": "bad request, incomplete credentials"})
    }

    let note = {
        "id": notes.length + 1,
        "title": body.title,
        "content": body.content
    }
    notes.push(note);
    res.json(notes);
});

app.put('/api/notes/:id', (req, res) => {

    let body = req.body;
    // validation of data
    if(!body.title || !body.content){
        return res.status(400).json({"massage": "bad request"})
    }

    let id = parseInt(req.params.id);
    // Find the note
    let note = notes.find((note) => note.id == id);
    if(!note){
        return res.status(404).json({"massage": "not found"})
    }

    // Update the note
    note.title = body.title;
    note.content = body.content;

    res.json(note);
});






app.listen(port, () => {
    console.log(`Server is listening on port: ${port}`);
});