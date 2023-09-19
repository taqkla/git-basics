const fs = require('fs');
const http = require('http');
const t1 = performance.now();
const server = http.createServer((req, res) => {

    // console.log(req.headers);
    console.log(req.method);
    switch (req.url) {
        case "/users":
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.end(fs.readFileSync('user.json', 'utf-8'));
            break;

        case "/":
            res.statusCode = 200;
            res.setHeader('Content-Type', 'text/html');
            res.end(fs.readFileSync('index.html', 'utf-8'));
            break;
        default:
            res.statusCode = 404;
            res.end("Page Not Found!");
    }

});

console.log(performance.now() - t1);

server.listen(3000, 'localhost', () => {
    console.log('Server running at http://localhost:3000/');
});


// fs.readFile('index.txt', (err, data) => {
//     if (err) {
//         res.statusCode = 500;
//         res.end('Error reading file');
//     } else {
//         res.end(data);
//     }
// });