var mongoose = require('mongoose');

var ChallengeSchema = new mongoose.Schema({
    name: {
        type: String,
        unique: true,
        required: true
    },
    lat: {
        type: Decimal,
        required: true
    },
    long: {
        type: Decimal,
        required: true
    },
    clue: {
        type: String,
        unique: true,
        required: true, 
    },
    found: {
        type: Boolean,
        default: false
    },
    // down the road! private challenge for friends only!
    private: {
        type: Boolean,
        default: true 
    },
    // public challenge that is shared
    shared: {
        type: Boolean, 
        default: false
    }
});

module.exports = mongoose.model('Challenges', BookSchema);
