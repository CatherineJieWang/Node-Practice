"use strict";

//common js
const fs = require("fs");

fs.readFile("./test.txt",'utf8', (err,content)=>{
    console.log('gggg',content)
});
console.log("content");
