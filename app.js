// http viene el propio node
const http = require('http');
const express = require('express');

http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'application/json' });

    let outdata = {
        nombre: 'Danii',
        edad: 27,
        url: req.url
    }

    res.write(JSON.stringify(outdata));
    res.end();
}).listen(8080);

console.log('Listen port 8080');

