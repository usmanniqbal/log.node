const app = module.exports = require('express')();
const service = require('./service');

app.post('/:collection', async (req, res) => res.send(await service.insert(req.header('projectId'), req.params["collection"], req.body)));
app.get('/:collection/:key', async (req, res) => res.send(await service.getByKey(req.header('projectId'), req.params["collection"], req.params["key"])));
app.post('/find/:collection', async (req, res) => res.send(await service.find(req.header('projectId'), req.params["collection"], req.body)));
