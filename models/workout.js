const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({

    day: {
        type: Date,
        default: Date.now
    },

    name: {
        type: String,
        trim: true,
        required: "Name is Required"
    },

    type: {
        type: String,
        trim: true,
        required: "Type is Required"
    },

    duration: {
        type: Number,
        trim: true,
        required: "Duration is Required"
    },

    weight: {
        type: Number,
        trim: true,
        required: "Weight is Required"
    },

    reps: {
        type: Number,
        trim: true,
        required: "Reps are Required"
    },

    sets: {
        type: Number,
        trim: true,
        required: "Sets are Required"
    }
});

const User = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;