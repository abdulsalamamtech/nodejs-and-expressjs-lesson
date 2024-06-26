const notes = require('../models/note.model');

const noteController = {};


noteController.getAllNotes = (req, res) => {
    res.json(notes);
};


noteController.getNote = (req, res) => {
    let id = parseInt(req.params.id);
    let note = notes.find((note) => note.id === id);

    if(!note){
        return res.status(404).json({"massage": "not found"})
    }
    res.json(note);
};



noteController.deleteNote = (req, res) => {
    let id = parseInt(req.params.id);

    // Find the note
    let findNote = notes.find((note) => note.id === id);
    if(!findNote){
        return res.status(404).json({"massage": "resource not found"})
    }

    // Send the undeleted notes
    let note = notes.filter((note) => note.id !== id);
    res.json(note);
};


noteController.addNote = (req, res) => {
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
};


noteController.updateNote = (req, res) => {

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
};


module.exports = noteController;