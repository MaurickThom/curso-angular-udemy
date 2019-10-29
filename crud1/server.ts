const express = require('express'),
    app = express(),
    {readFile,writeFile} = require('fs'),
    {promisify} = require('util')

const readFileAsync = promisify(readFile),
        writeFileAsync = promisify(writeFile) 

let db = {}

app.get('/api',(req,res)=>{
    res.json({
        hola:'hola'
    })
})

app.listen(3000,()=>console.log('listen in port 3000'))