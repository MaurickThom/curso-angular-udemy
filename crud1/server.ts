const express = require('express'),
    app = express(),
    {readFile,writeFile} = require('fs'),
    {promisify} = require('util')

const readFileAsync = promisify(readFile),
        writeFileAsync = promisify(writeFile) 

let db = []

const loadingDB = async()=>{
    try{
        db = JSON.parse(await readFileAsync(`database.json`))
    }catch{
        db = []
    }
    return db
}

const saveDB = ()=>{
    return new Promise((resolve,reject)=>{
        let data =JSON.stringify(db)
        writeFile('database.json',data,err=>{
            if(err) return reject(err)
            return resolve(data)
        })
    })
}

app.use(express.urlencoded({extended:true}))
app.use(express.json())

app.get('/api/users',async(req,res)=>{
    await loadingDB()
    res.json(db)
})

app.listen(3000,()=>console.log('listen in port 3000'))