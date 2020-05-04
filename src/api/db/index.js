const config = require('config');
const mongoose = require('mongoose');

const clientOption = {
    socketTimeoutMS: 30000,
    keepAlive: true,
    poolSize: 50,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    autoIndex: false
};
let connection;
async function get(dbName) {
    if (!connection) {
        console.log("intializing connection");
        connection = mongoose.createConnection(config.server, clientOption)

        connection.on("error", console.error.bind(console, "MongoDB Connection Error>> : "));
        connection.once("open", function () {
            console.log("client MongoDB Connection ok!");
        });
    }
    return await connection.useDb(dbName);
}

module.exports = {
    get
}