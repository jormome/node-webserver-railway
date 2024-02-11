const express = require('express')
const hbs = require('hbs');
require('dotenv').config(); // comprueba si no existe el puerto del servidor me cogerá el que hemos creado

const app = express()
const port = process.env.PORT;
// const port = 8080;

const info = {
    nombre: 'Fernando Herrera',
    titulo: 'Curso de Node'
}

// Handlebars
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials'); // registramos los parciales

// para mostrar el contenido o hacer publica una carpet debo crear un midleware
// un midleware es una simple funcion que se ejecuta antes que el resto
app.use( express.static('public') );    // le digo que me haga publico la siguiente carpeta, si estubiera en otra ruta deberiamos poner la ruta


// app.get('/', (req, res) => {
//   res.send('Home Page')
// })

app.get('/', (req, res) => {
    // renderizamos una vista, en este caso es la home y no hace falta ponerle la extension de home.hbs
    // res.render('home');
    
    // con esta sentencia le decimos el handlebar que queremos prenderizar y le pasamos un objeto con información que recibirá la pagina
    res.render('home', info);
})

app.get('/generico', (req, res) => {
    // res.sendFile(__dirname + '/public/generic.html')
    res.render('generico', info)
    //res.render('prova')
})

app.get('/elements', (req, res) => {
    // res.sendFile(__dirname + '/public/elements.html')
    res.render('elementos', info);
})

// si no se encuentra la página
app.get('*', (req, res) => {
    // res.send('404 | page not found')
    // res.sendFile( __dirname + '/public/404.html')
    res.render('404');
})

// app.listen(8080)
// lo mismo con un callback
app.listen(port, () => {
    console.log(`Example app listenning at http://localhost:${port}`);
})