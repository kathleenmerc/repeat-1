const express = require('express')
const router = express.Router()
const goalsController = require('../../controllers/api/goals');
//const ensureLoggedIn = require('../../config/ensureLoggedIn')

// POST /api/goals
router.post('/add-goal',  goalsController.create);

module.exports = router;