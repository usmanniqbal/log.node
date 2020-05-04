const mongoose = require('mongoose');
var Schema = mongoose.Schema;

// module.exports = mongoose.model('account', Schema({
//     title: String,
//     projectId: String,
//     secretKey: String
// }, {
//     timestamps: true
// }));
module.exports = Schema({
    title: String,
    projectId: String,
    secretKey: String
}, {
    timestamps: true
});