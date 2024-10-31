const express = require("express");

const app = express();

// in express, if you want to send JSON data, you need to first parse the json data.

app.use(express.json()); // we can use body-parser here as well

app.post("/sum", function(req, res) {
    console.log(req.body);    
    const a = parseInt(req.body.a);
    const b = parseInt(req.body.b);

    res.json({
        ans: a + b
    })
});

app.listen(3000);