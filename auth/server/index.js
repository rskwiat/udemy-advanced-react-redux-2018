const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const router = require('./router');

mongoose.set('useCreateIndex', true);
mongoose.connect('mongodb://localhost/auth', { useNewUrlParser: true });

app.use(morgan('combined'));
app.use(cors());
app.use(bodyParser.json({ type: '*/*' }));
router(app);

const port = process.env.PORT || 4000;
const server = http.createServer(app);

server.listen(port);
console.log(`Server listening on http://localhost:${port}`);
