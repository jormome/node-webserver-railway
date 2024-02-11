
const http = require('http');

// la req = request  = va a recibir toda la información enviada desde el cliente como por la consulta al server
// la res = response = seá la información de retorno como resultado de la consulta del cliente
http.createServer( (req, res) => {
    // console.log(req);
    
    // para devolver un error
    // res.writeHead(404);     // le puedo mandar el codigo que queramos como respuesta 200=OK; 404=Página no encontrada, ...

    // para devolver un texto plano
    // res.writeHead(200, { 'Content-Type': 'text/plain'});
    // res.write('Hola Mundo');
    
    // para devolver un JSON
    // res.writeHead(200, {'Content-Type': 'application/json'});
    // const persona = {
    //     id: 1,
    //     nombre: 'Fernando'
    // }
    // res.write(JSON.stringify(persona));
    
    // para devolver un cvs, es un archivo que se va a descargar
    // le digo en los heders al navegador que le mando un archivo adjunto con el nombre lista.csv
    // res.setHeader('Content-Disposition', 'attachment; filename=lista.csv');
    // res.writeHead(200, {'Content-Type': 'application/csv'});
    // res.write('id, nombre\n');
    // res.write('1, Fernando\n');
    // res.write('2, Maria\n');
    // res.write('3, Juan\n');
    // res.write('4, Pedro\n');

    res.write('Hola Mundo');
    res.end();  // sin esta sentencia el servidor no sabe si tiene que hacer algo más y se queda escuchando y no muestra nada por el navegador
})
.listen(8080);  // es el puerto de escucha de nuestro server

console.log("Escuchano en el localhost:8080");