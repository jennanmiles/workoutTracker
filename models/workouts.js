const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    type: {
        type: String,
        trim: true,
        required: "Enter the type of workout"
    },
    name: {
        type: String,
        trim: true,
        required: "Enter your workout name"
    },   
    duration: {
        type: Number,
        required: "Enter time duration of workout"
    },     
    weight: {
        type: Number,
        required: "Enter a weight"
    },
    reps: {
        type: Number,
        required: "Enter number of reps"
    },    
    sets: {
        type: Number,
        required: "Enter number of sets"
    },
    distance: {
        type: Number,
        required: "Enter distance traveled"
    }
});

const Workout = mongoose.model('Workout', workoutSchema);

module.exports = Workout;