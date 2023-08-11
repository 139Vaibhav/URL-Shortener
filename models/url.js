const mongoose = require("mongoose");

const UrlSchema = new mongoose.Schema({
    shortUrl: {
        type: String,
        required: true,
        unique: true,
    },
    longUrl: {
        type: String,
        required: true,
    },
}, { timestamps: true });

module.exports = mongoose.model("URL", UrlSchema);
