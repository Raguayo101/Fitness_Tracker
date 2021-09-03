const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const fitnessSchema = new Schema({
    day: {
        type: Date,
        default: () => new DAte(),
    },
    exervises: [
        {
            type: {
                type: String,
                trim: true,
                required: 'Input an exercise type'
            },
            name: {
                type: String,
                trim: true,
                required: 'Input an exercise name'
            },
            duration: {
                type: Number,
                required: 'Input an exercise length in minuets'
            },
            weight: {
                type: Number
            },
            reps: {
                type: Number
            },
            sets: {
                type: Number
            },
            distance: {
                type: Number
            }

        }
    ]
})

const Fitness = mongoose.model('Get in some healthy exercises!', fitnessSchema);

module.exports = Fitness;