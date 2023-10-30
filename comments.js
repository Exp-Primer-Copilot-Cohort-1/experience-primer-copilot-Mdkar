// create web server with express
const express = require('express');
const app = express();
// create a port
const port = 3000;
// import data
const comments = require('./data/comments');