
const index = require('./index.js')
// console.log(index);


// console.log(index.readLinks(process.argv[2]));

// console.log(index.readFileMd(file));
console.log(index.module(process.argv[2]));






// <------Función global------>
// const validateLinks = (file) => {
// return new Promise((resolve,reject))
// mdLinks("./md-Links/README.md")
// .then(links => {
//   [{ href, text, file }]
// })
// .catch(console.error);

// mdLinks("./md-Links/README.md", { validate: true })
// .then(links => {
//    [{ href, text, file, status, ok }]
// })
// .catch(console.error);

// mdLinks("./md-Links/dir")
// .then(links => {
//    [{ href, text, file }]
// })
// .catch(console.error);

// }
// validateLinks(process.argv[2])

// exports.validateLinks = validateLinks;