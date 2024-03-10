const express = require('express');
const path = require('path');
const myAPI = require('./router/index.js');

const app = express();

app.use(express.json());

myAPI(app);

const admin = require('firebase-admin');
const db = require('./db');

// carpeta client/home
app.use('/', express.static(path.resolve(__dirname, 'client', 'home')));

// carpeta client/login
app.use('/login', express.static(path.resolve(__dirname, 'client', 'login')))

//carpeta client/register
app.use('/register', express.static(path.resolve(__dirname, 'client', 'register')))

// carpeta
app.use('/nuevo' , express.static(path.resolve(__dirname, 'client', 'home', 'nuevo')))

app.use('/realizando' , express.static(path.resolve(__dirname, 'client', 'home', 'realizando')))

app.listen(3000, () => {
  console.log('Server is running on port 3000');
})
