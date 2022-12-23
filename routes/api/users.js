const express = require('express')
const router = express.Router()
const usersController = require('../../controllers/api/users')


// ROUTES:

// POST - /api/users/signup
router.post('/signup', usersController.create)


// POST - api/users/login
router.post('/login', usersController.login)

module.exports = router