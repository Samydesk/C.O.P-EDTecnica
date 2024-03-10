const express = require('express');
const path = require('path');
const myAPI = require('./router/index.js');

const app = express();

app.use(express.json());

myAPI(app);






const admin = require('firebase-admin');
const db = require('./db');

app.post('/guardarDatos', (req, res) => {
  const datos = req.body;
modal = {
    "tipo": "Homicidio",
    "fecha": "XX-XX-XXXX",
    "lugar": "Guatire",
    "brigada": "123",
    "detalles": "Aquí van los detalles"
   };   

   const collectionRef = admin.firestore().collection('misDatos');

   collectionRef.add(datos)
    .then((docRef) => {
      console.log('Documento escrito con ID: ', docRef.id);
      res.send('Datos guardados exitosamente');
    })
    .catch((error) => {
      console.error('Error añadiendo el documento: ', error);
      res.status(500).send('Error al guardar los datos');
    });
})









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