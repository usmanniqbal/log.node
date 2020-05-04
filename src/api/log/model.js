const mongoose = require('mongoose');
var Schema = mongoose.Schema;

module.exports = Schema({
    key: Object,
    data: Schema.Types.Mixed
}, {
    timestamps: true
});