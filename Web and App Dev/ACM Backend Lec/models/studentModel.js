const mongoose = require('mongoose')

const studentModel = mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "Please enter your name"]
        },

        rollNo: {
            type: Number,
            required: true,
            default: 0
        },

        marks: {
            type: Number,
            required: false,
            default: 0
        }
    }
)

const student = mongoose.model("studentModel", studentModel);
module.exports = student;