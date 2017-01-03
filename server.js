process.env.NODE_ENV = 'production';

const path = require('path');
const express = require('express');

const handleRender = require('./build/backend.js').handleRender;

const app = express();
const root = path.join(__dirname, 'build');

app.use('/static', express.static(path.join(root, 'static')));
app.get('*', handleRender);
app.listen(3000);
console.log("App listening on port 3000");
