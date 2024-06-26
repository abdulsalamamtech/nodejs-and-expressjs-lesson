const express = require('express');
const router = express.Router();
const  {subscriberController, getDetailsById} =  require('../controllers/subscriberController');


// Get all subscribers
router.get('/', subscriberController.getAll);

// Get a single subscriber
router.get('/:id', getDetailsById, subscriberController.getOne);

// Delete a subscriber
router.delete('/:id', getDetailsById, subscriberController.delete);

// Add a subscriber
router.post('/', subscriberController.post);

//  Update subscribers
router.put('/:id', getDetailsById, subscriberController.put);

//  Patch subscribers
router.patch('/:id', getDetailsById, subscriberController.patch);


module.exports = router;