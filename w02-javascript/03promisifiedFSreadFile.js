const fs = require('fs');

// promisified

const readFileAsync = new Promise( (resolve, reject) => {
    fs.readFile("./a.txt", "utf-8", (err, data) => {
        if (err) {
            reject(`File not found.`)
        } else {
            resolve(data)
        }
    });
})

readFileAsync.then((data) => {
    console.log(`File contents: ${data}`)
    console.log(`Files has been read.`)
}).catch( (err) => {
    console.log(err)
})