const express = require("express");

const app = express();

// Create a middleware function that logs each incoming request’s HTTP method, URL, and timestamp to the console
function logInformation(req, res, next) {
    console.log(`Method is ${req.method}`);
    console.log(`Host is ${req.hostname}`);
    console.log(`Timestamp is ${new Date()}`);
    next();
}

// Create a middleware that counts total number of requests sent to a server. Also create an endpoint that exposes it
let count = 0;
function countRequest(req, res, next) {
    count ++;
    console.log(`Total number of request is ${count}`)
    next ();
}

app.use(logInformation);

app.get("/admin", function(req, res) { // doesn't have access to countRequest() middleware
    res.json({
        totalCount: count
    })
}) 

app.use(countRequest);

// app.get("/sum", countRequest, function(req, res) // calling middleware  
app.get("/sum", function(req, res) {
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);

    res.json({
        ans: a + b
    })
});

app.get("/multiply", function(req, res) {
    const a = req.query.a;
    const b = req.query.b;
    res.json({
        ans: a * b
    })
});

app.get("/divide", function(req, res) {
    const a = req.query.a;
    const b = req.query.b;
    res.json({
        ans: a / b
    })

});

app.get("/subtract", function(req, res) {
    const a = req.query.a;
    const b = req.query.b;
    res.json({
        ans: a - b
    })
});

app.listen(3000);