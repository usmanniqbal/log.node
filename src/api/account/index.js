const app = module.exports = require('express')();
const service = require('account/service');

app.post('/', async (req, res) => res.send(await service.insert(req.body)));
