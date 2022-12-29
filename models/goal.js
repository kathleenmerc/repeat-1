const mongoose = require('mongoose')
const Schema = mongoose.Schema

const goalSchema = new Schema({
    goalLine: {type: String, required: true},
    sunday: {type: Boolean},
    monday: {type: Boolean},
    tuesday: {type: Boolean},
    wednesday: {type: Boolean},
    thursday: {type: Boolean},
    friday: {type: Boolean},
    saturday: {type: Boolean},
    },
    {
        timestamps: true
    }
)
const Goal = mongoose.model("Goal", goalSchema)
module.exports = Goal