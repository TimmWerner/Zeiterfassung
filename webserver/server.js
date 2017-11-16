'use strict';

const express = require('express');

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = express();

app.use(express.static('src/app'));
app.use('/img', express.static('src/img'));
app.use('/angular', express.static('node_modules/angular'));

app.listen(PORT, HOST);
