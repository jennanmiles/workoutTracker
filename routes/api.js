const router = require('express').Router();
const Workout = require('../models/workouts.js');

router.post('/api/workout', ({body}, res) => {
    Workout.create(body)
    .then(dbTransaction => {
        res.json(dbTransaction);
    })
    .catch(err => {
        res.status(400).json(err);
    });
});

router.post('/api/workout', ({body}, res) => {
    Workout.insertMany(body)
    .then(dbTransaction => {
        res.json(dbTransaction);
    })
    .catch(err => {
        res.status(400).json(err);
    });
});

router.get('/api/workout', (req,res) => {
    Workout.find({})
    .sort({date: -1})
    .then(dbTransaction => {
        res.json(dbTransaction);
    })
    .catch(err => {
        res.status(400).json(err);
    });
});

module.exports = router;