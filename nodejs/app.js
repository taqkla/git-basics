const fs = require('fs');
const http = require('http');

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');

    fs.readFile('index.cpp', (err, data) => {
        if (err) {
            res.statusCode = 500;
            res.end('Error reading file');
        } else {
            res.end(data);
        }
    });
});

server.listen(3000, 'localhost', () => {
    console.log('Server running at http://localhost:3000/');
});
