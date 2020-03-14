const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors')
const route = require('./src/routes/routing')
const requestLogger = require('./src/utilities/requestLogger');
const errorLogger = require('./src/utilities/errorLogger');

app.use(cors());
app.use(requestLogger);
app.use(bodyParser.json());
app.use('/', route);
app.use(errorLogger);

app.listen(5544);
console.log('Server ONline localhost:5544');
