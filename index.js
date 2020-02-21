
// module.exports = () => {
//   // ...
// };

const pathNode = require('path');
const fs = require('fs');
const markdownLinkExtractor = require('markdown-link-extractor')
// const fetch = require('node-fetch');
const marked = require('marked');
const urlStatusCode = require('url-status-code')
const chalk = require('chalk');

let file = process.argv[2]; 
file = pathNode.resolve(file);

// const mdLinks = require("md-links");
// console.log(mdLinks)




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
readFileMd(file)
.then((data) => {
   let newMarked = new marked.Renderer();
   let linksArray= [];
   newMarked.link = function (href, title, text){
       linksArray.push({
        href: href,
        text: text, 
        file: file
       });
   };
   marked(data, { newMarked: newMarked });
})
.catch(err => {console.log(err)
exports.readFileMd = readFileMd
})



// <------Función para leer links en archivo md------>
const readLinks = (file) =>{
    let urlsOk = 0;
    let urlsFails = 0;
    let links = markdownLinkExtractor(fs.readFileSync(file).toString());
    
    // - Recorre el Areglo de Links
    links.forEach(function (link) {
        // - Verifica el Status de las URLs
        urlStatusCode(link, (error, statusCode) => {
            if (error) {
                console.error(error)
            } else {
                // - Imprime el Link
                console.log(link);
                
                // - Imprime el Status Code
                console.log(statusCode);
                
                // - Verifica el Status Code
                // - Si está arriba entr 200 y 399 la URL está OK
                // - En caso contrario no está OK
                if ((statusCode >= 200) && (statusCode <= 399)) {
                    urlsOk ++;
                    console.log("this link is ok");
                } else {
                    urlsFails ++;
                    console.log("this link is fails");
                }
            }
            
            // - Imprime el reporte de las URLs
            console.log(chalk.blue("URLs OK =" + urlsOk));
            console.log(chalk.red("URLs Fails = " + urlsFails));
        })
    });
}
readLinks(file)
exports.readLinks = readLinks;









