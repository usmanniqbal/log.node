// const moduleAlias = require('module-alias');
// moduleAlias.addAlias('db', __dirname + '/db');
// moduleAlias.addAlias('auth', __dirname + '/auth');
// moduleAlias.addAlias('account', __dirname + '/account');
// moduleAlias.addAlias('log', __dirname + '/log');

const app = module.exports = require('express')();

app.use("/log", require('api/log'));
// app.use("/account", require('auth'), require('account'));
