const express = require('express');
const router = express.Router();
const usersCtrl = require('../../conrollers/api/users');

// usersCtrl.getAllUsers,
// usersCtrl.createNewUser,
// usersCtrl.deleteUser,
// usersCtrl.updateUser,
// usersCtrl.loginUser


// LOGIN: POST /api/users/login
router.post('/login', usersCtrl.loginUser);

//Index
router.get('/', usersCtrl.getAllUsers)


// NEW: will be created with react sign up form (should check if the user is an employee already)


// DELETE /api/users/:id
router.delete('/:id',usersCtrl.deleteUser)


// UPDATE: Put :id   route to update an employee by ID
router.put('/:id', usersCtrl.updateUser);


// Create: POST /api/users
router.post('/', usersCtrl.createNewUser);


// EDIT: will be done in React

// SHOW
router.get('/:id', usersCtrl.showUser);

module.exports = router;

