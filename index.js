
// module.exports = () => {
//   // ...
// };

const path = require('path');
const fs = require('fs');
const  MarkdownIt  = require('markdown-it')();
const isURL = require('isurl');



// const mdLinks = require("md-links");
// console.log(mdLinks)


const readFileMd = (file) =>{
    return new Promise((resolve,reject) =>{
        fs.readFile(file, function(err, data){
            if(err){
                reject(err);
            }else{
                resolve(data.toString());
            }
        })

    })
}

readFileMd('README.md')
.then(res => console.log(res))
.catch(err => console.log(err))



//  resultado  let = MarkdownIt.render ( ' # markdown-it rulezz! ' ) ; 



//pruebasssssss