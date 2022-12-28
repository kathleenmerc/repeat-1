const express = require('express')
const router = express.Router()
const usersController = require('../../controllers/api/users')
const ensureLoggedIn = require('../../config/ensureLoggedIn')


// ROUTES:

// POST - /api/users/signup
router.post('/signup', usersController.create)


// POST - api/users/login
router.post('/login', usersController.login)


// GET - api/users/check-token
router.get('/check-token', ensureLoggedIn, usersController.checkToken)


module.exports = router