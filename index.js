
// module.exports = () => {
//   // ...
// };

const pathNode = require('path');
const fs = require('fs');
const markdownLinkExtractor = require('markdown-link-extractor')
const fetch = require('fetch');
const fetchLink = fetch.fetchUrl;


let file = process.argv[2]; 
file = pathNode.resolve(file);

// var MarkdownIt = require('markdown-it')
// const mdLinks = require("md-links");


// const isURL = require('isurl');
// const mdLinks = require("md-links");
// console.log(mdLinks)



// Returns: '.md'

// <------Función para leer archivo md------>
const readFileMd = (path) =>{
    return new Promise((resolve,reject) =>{
        if(pathNode.extname(path)!=('.md')){
            reject("esta ruta no es valida")  
        }else{
            fs.readFile(path,'utf-8', (err, data) =>{
            if(err){
                reject(err);
            }else{
                resolve(data);
            }
        })
        }
    })           
}
readFileMd('README.md')
.then(res => console.log(res))
.catch(err => console.log(err))



// <------Función para leer links en archivo md------>
const readLinks = (file) =>{
    let links = markdownLinkExtractor(fs.readFileSync(file).toString());
    links.forEach(function (link) {
    console.log(links);
});
}
 readLinks(process.argv[2])
exports.readLinks = readLinks;



// <------Función para obtener el validate de los links------>

// const validateUrl = (links) =>{
//     let status;
//     fetchUrl(links,(error,meta,body) => {
//         if(meta != undefined){
//             status= meta.status;
//             if(status === 200){
//                 console.log('Its OK' + status + '' + links);
//             }else{
//                 console.log('Its BROKEN' + status + '' + links);
//             }
//         }
//     })
// }
// validateUrl(process.argv[2])

// <------Función para obtener el stats de los links------>


