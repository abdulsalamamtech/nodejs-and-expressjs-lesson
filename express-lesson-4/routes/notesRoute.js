

const express = require('express');
const router = express.Router();
const  noteController =  require('../controllers/noteController');


// Get all notes
router.get('/', noteController.getAllNotes);

// Get a single note
router.get('/:id', noteController.getNote);

// Delete a note
router.delete('/:id', noteController.deleteNote);

// Add a note
router.post('/', noteController.addNote);

//  Update notes
router.put('/:id', noteController.updateNote);


module.exports = router;