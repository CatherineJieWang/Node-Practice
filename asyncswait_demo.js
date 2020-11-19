"use strict";

const fs = require("fs");

function readFile(filename, encoding) {
  const fn = (resolve, reject) => {
    fs.readFile(filename, encoding, (err, data) => {
      if (!err) {
        resolve(data);
      } else {
        reject(err);
      }
      // console.log('data',data)
    });
  };
  return new Promise(fn);
}

// readFile('./test.txt','utf8').then(
//     data=>{
//         console.log('data',data)
//     }
// ).catch(err=>{
//     console.log(err)
// })

(async () => {
  try {
    const content = await readFile("./test.txt", "utf8");
    console.log("content", content);
    console.log("file submit");
  } catch (err) {
    console.log("err", err);
  }
})();
