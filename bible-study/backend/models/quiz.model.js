const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const quizSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        minlength: 3
    },
    questions: {type: Array, required: true, unique:true, trim: true},
    answers: {type: Array, required: true, unique: true, trim: true}
}, {
    timestamps: true,
});

const Quiz = mongoose.model('Quiz', quizSchema);

module.exports = Quiz;