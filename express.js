const express = require('express')
const app = express();

const port = 1000;

app.get('/', function (req, app) {
    console.log("Client Connected");
    app.send("Simple Web Server with express.");
})

app.listen(port);

console.log("Web Server Running in port " + port);