'use strict'

const fs = require('fs')


function readFile(filename,encoding){
    const fn=(resolve,reject)=>{
        fs.readFile(filename, encoding, (err,data)=>{
            if(!err){
                resolve(data)
            }else{
                reject(err)
            }
            // console.log('data',data)
        })
    }
    return new Promise(fn);
}

readFile('./test.txt','utf8').then(
    data=>{
        console.log('data',data)
    }
).catch(err=>{
    console.log(err)
})

console.log('file submit')