const router = require('express').Router();
const Fitness = require('../models/fitness.js');

// route for workouts
router.post('/api/workouts', (req, res) => {
    Fitness.create({})
        .then((dbFitness) => {
            res.json(dbFitness);
        })
        .catch((err) => {
            res.json(err);
        });
});

// router for workout w/id
router.put('/api/workouts/:id', ({ body, params }, res) => {
    Fitness.findByIdAndUpdate(
        params.id,
        { $push: { exercises: body } },
        { new: true, runValidators: true }
    )
        .then((dbFitness) => {
            console.log(dbFitness);
            res.json(dbFitness);
        })
        .catch((err) => {
            res.json(err);
        });
});

router.get('/api/workouts', (req, res) => {
    Fitness.aggregate([
        {
            $addFields: {
                totalDuration: {
                    $sum: '$exercises.duration'
                }
            }
        }
    ])
        .then((dbFitness) => {
            res.json(dbFitness);
        })
        .catch((err) => {
            res.json(err);
        });
});

router.get('/api/workouts/range', (req, res) => {
    Fitness.aggregate([
        {
            $addFields: {
                totalDuration: {
                    $sum: '$exercises.duration'
                }
            }
        }
    ])
        .sort({ _id: -1 })
        .limit(7)
        .then((dbFitness) => {
            console.log(dbFitness);
            res.json(dbFitness);
        })
        .catch((err) => {
            res.json(err);
        });
});

router.delete('/api/workouts', ({ body }, res) => {
    Fitness.findByIdAndDelete(body.id)
        .then(() => {
            res.json(true);
        })
        .catch((err) => {
            res.json(err);
        });
});

module.exports = router;