// console.log(globalThis);

// globalThis.setTimeout(() => {

// without globalThis
setTimeout(() => {
    console.log('in the timeout');
    clearInterval(mInterval)
}, 3000);

const mInterval = setInterval(() => {    
    console.log('in the interval');
}, 1000);

// console.log(__dirname);
// console.log(__filename);

// console.log(document.querySelector);