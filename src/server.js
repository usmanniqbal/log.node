const moduleAlias = require('module-alias');
moduleAlias.addAliases({
    'src': __dirname,
    'api': `${__dirname}/api`,
    'config': `${__dirname}/app.config`
});

const express = require('express');
const bodyParser = require('body-parser');
const config = require('config');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// const swagger = require('swagger-ui-express');
// const swaggerConfig = require('./swagger.config');
// app.use('/docs', swagger.serve, swagger.setup(swaggerConfig));

app.use('/api', require('api'));
app.get('/', (req, res) => {
    res.send({ msg: 'Hello: server is up and running' });
});
app.all('*', (req, res) => {
    res.status(404).send({ msg: 'not found' });
});

app.listen(config.port, () => console.log(`Application is hosted on localhost:${config.port}`))