const Goal = require('../../models/goal')

module.exports = {
    create
}

async function create(req, res) {
    try {
        const goal = await Goal.create(req.body)
        res.json(goal)
    } catch (err) {
        res.status(400).json(err)
    }
}

// res.json({
    //     goal: {
    //         goalLine: req.body.goalLine,
    //         sunday: req.body.sunday,
    //         monday: req.body.monday,
    //         tuesday: req.body.tuesday,
    //         wednesday: req.body.wednesday,
    //         thursday: req.body.thursday,
    //         friday: req.body.friday,
    //         saturday: req.body.saturday,
    //     }
    // })