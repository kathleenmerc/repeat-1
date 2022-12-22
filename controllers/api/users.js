const User = require('../../models/user')

module.exports = {
    create
}

// ADD NEW USER TO DATABASE:
async function create (req, res) {
    try {
        const user = await User.create(req.body)
    } catch (err) {
        res.status(400).json(err)
    }
}