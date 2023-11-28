let ejs = require('ejs');
const { writeFileSync, readdir } = require("fs")


// console.log()
readdir("./reports", (err, files) => {
    if (err !== null) throw new Error(err)
    const reports = files.filter(file => !file.includes("index"))
    ejs.renderFile("template.ejs", { title: "This is me", reports }, {}, function (err, str) {
        writeFileSync("./reports/index.html", str)
    });

})
