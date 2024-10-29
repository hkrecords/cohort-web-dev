const fs = require("fs");

function main (fileName) {
    
    // console.log(process.argv) // extra arguments have excess in process.argv -> node index.js himanshu -> [1] node, [2] index.js, [3] himanshu 

    fs.readFile(fileName, "utf-8", function(err, data) {
        let total = 0; // counts number of spaces
        for (let i = 0; i <= data.length; i++) {
            if (data[i] === " ") {
                total++;
            }
        }
        console.log(total + 1); // print total words
    })
}

// main("a.txt");

main(process.argv[2])