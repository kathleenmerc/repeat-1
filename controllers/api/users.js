module.exports = {
    create
}

function create (req, res) {
    res.json({
        user: {
            username: req.body.username
        }
    })
}