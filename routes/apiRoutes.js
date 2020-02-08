const router = require("express").Router();
const workout = require("../models/workout.js")

router.post("/api/workouts", (req, res) => {
    workout.create({})
        .then(db => {
            res.json(db);
        })
        .catch(err => {
            res.json(err);
        })
});

router.put("/api/workouts/:id", ({
    body,
    params
}, res) => {
    workout.findByIdAndUpdate(
            params.id, {
                $push: {
                    exercises: body
                }
            }, {
                new: true,
                runValidators: true
            }
        ).then(db => {
            res.json(db);
        })
        .catch(err => {
            res.json(err);
        })
});

router.get("/api/workouts", (req, res) => {
    workout.find().then(db => {
        res.json(db);
    })
    .catch(err => {
        res.json(err);
    })
});

router.get("/api/workouts/range", (req, res) => {
    workout.find().limit(7).then(db => {
        res.json(db);
    })
    .catch(err => {
        res.json(err);
    })
});

module.exports = router