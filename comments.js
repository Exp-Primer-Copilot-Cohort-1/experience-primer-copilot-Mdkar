// create web server with nodejs
// 1. get http module
const http = require('http');
const fs = require('fs');
const url = require('url');
// 2. create server
const app = http.createServer((req, res) => {
    // 2.1 get request url
    let urlObj = url.parse(req.url, true);
    let pathName = urlObj.pathname;
    // 2.2 get query string
    let query = urlObj.query;
    // 2.3 get method
    let method = req.method;
    // 2.4 get headers
    let headers = req.headers;
    // 2.5 get request body
    let body = [];
    req.on('data', (chunk) => {
        body.push(chunk);
    })
    req.on('end', () => {
        body = Buffer.concat(body).toString();
        // 2.6 set response content type
        res.setHeader('Content-Type', 'text/html;charset=utf-8');
        // 2.7 set response body
        if (pathName === '/' || pathName === '/index.html') {
            fs.readFile('./index.html', (err, data) => {
                if (err) {
                    res.statusCode = 404;
                    res.end('404 Not Found');
                } else {
                    res.end(data);
                }
            })
        } else if (pathName === '/comments.html') {
            fs.readFile('./comments.html', (err, data) => {
                if (err) {
                    res.statusCode = 404;
                    res.end('404 Not Found');
                } else {
                    res.end(data);
                }
            })
        } else if (pathName === '/comments') {
            // 2.7.1 get comments
            let comments = JSON.parse(fs.readFileSync('./data.json', 'utf-8'));
            // 2.7.2 set response body
            if (method === 'GET') {
                res.end(JSON.stringify(comments));
            } else if (method === 'POST') {
                // 2.7.3 add new comment
                comments.push(query);
                fs.writeFileSync('./data.json', JSON.stringify(comments));
                // 2.7.4 redirect
                res.statusCode = 302;
                res.setHeader('Location', '/comments.html');
                res.end();
            }
        } else {
            // 2.7.5 set 404 status code
            res.statusCode = 404;
            res.end('404 Not Found');
        }
    })})