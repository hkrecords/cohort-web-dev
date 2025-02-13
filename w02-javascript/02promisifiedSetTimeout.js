// Write Promisified Examples for:
// setTimeout

function setTimeoutPromisified(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function callback() {
    console.log("Some seconds have passed");
}

//callback
setTimeout(callback, 2000);

// promise
setTimeoutPromisified(4000).then(callback);  


// promise

const setTimeoutPromisified2 = () => {
    return new Promise (resolve => {
        setTimeout(() => resolve(), 6000)
    })
    .then (() => {
        console.log("Print from second method")
    })
}

setTimeoutPromisified2();