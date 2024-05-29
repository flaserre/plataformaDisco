const express = require('express');
const app = express();
const router = require('./Routes/index.js');
const mongoose = require('mongoose');
const path = require("path");

app.use(express.json());
app.use(express.static(path.join(__dirname, "Public")));
app.use('/', router);

app.listen(5000, () => {
  console.log('Server listening on port 5000');
});

mongoose.connect('mongodb+srv://florlaserre:flor1996@cluster0.k1xqfcz.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => {
  console.log('Conexión exitosa a MongoDB');
})
.catch((error) => {
  console.error('Error al conectar a MongoDB:', error);
});

const usersRouter = require('./Routes/user.js');

app.use('/user', usersRouter);

const albumRouter = require('./Routes/album.js');

app.use('/album', albumRouter);
