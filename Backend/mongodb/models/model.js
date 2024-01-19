const mongoose = require("mongoose");

const Volume = new mongoose.Schema({
    Jan: { type: Number, default: 0, required: true },
    Feb: { type: Number, default: 0, required: true },
    Mar: { type: Number, default: 0, required: true },
    Apr: { type: Number, default: 0, required: true },
    May: { type: Number, default: 0, required: true },
    Jun: { type: Number, default: 0, required: true },
    Jul: { type: Number, default: 0, required: true },
    Aug: { type: Number, default: 0, required: true },
    Sep: { type: Number, default: 0, required: true },
    Oct: { type: Number, default: 0, required: true },
    Nov: { type: Number, default: 0, required: true },
    Dec: { type: Number, default: 0, required: true }
});

const Keyword = new mongoose.Schema({
    keyword: { type: String, required: true },
    volumes: {
        type: Volume,
        required: true,
    }
})

module.exports = mongoose.model('Keyword', Keyword);