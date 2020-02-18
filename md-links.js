
const index = require('./index.js')
console.log(index);

console.log(index.readLinks(process.argv[2]));
console.log(index.validateLinks());
