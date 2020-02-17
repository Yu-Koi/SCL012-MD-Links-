
const findLinks = () => {

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

exports.findLinks = findLinks;