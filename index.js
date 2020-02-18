
// module.exports = () => {
//   // ...
// };

// const path = require('path');
const fs = require('fs');
const markdownLinkExtractor = require('markdown-link-extractor')



// const isURL = require('isurl');
// const mdLinks = require("md-links");
// console.log(mdLinks)



// <------Función para leer archivo md------>
const readFileMd = (file) =>{
    return new Promise((resolve,reject) =>{
        fs.readFile(file,'utf-8', function(err, data){
            if(err){
                reject(err);
            }else{
                resolve(data);
            }
        })

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



// <------Función para validar links------>
const validateLinks = (file) => {

mdLinks("./md-Links/README.md")
.then(links => {
//   [{ href, text, file }]
})
.catch(console.error);

mdLinks("./md-Links/README.md", { validate: true })
.then(links => {
//    [{ href, text, file, status, ok }]
})
.catch(console.error);

mdLinks("./md-Links/dir")
.then(links => {
//    [{ href, text, file }]
})
.catch(console.error);

}

exports.validateLinks = validateLinks;