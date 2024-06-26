const express = require('express');
const router = express.Router();
const  {userController, getDetailsById} =  require('../controllers/userController');


// Get all users
router.get('/', userController.getAll);

// Get a single user
router.get('/:id', getDetailsById, userController.getOne);

// Delete a user
router.delete('/:id', getDetailsById, userController.delete);

// Add a user
router.post('/', userController.post);

//  Update users
router.put('/:id', getDetailsById, userController.put);

//  Patch users
router.patch('/:id', getDetailsById, userController.patch);


module.exports = router;