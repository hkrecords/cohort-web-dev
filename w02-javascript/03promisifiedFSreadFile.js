const fs = require('fs').promises;

// promisified

async function readFileAsync() {
    try {
        const data = await fs.readFile("./a.txt", "utf-8");
        console.log(`File content: ${data}`);
        console.log(`Successfully read the file.`);
    } catch (err) {
        console.error(`Error reading file: ${err.message}`);
    }
}

readFileAsync();
