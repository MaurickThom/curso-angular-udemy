const express = require('express'),
    app = express(),
    {readFile,writeFile} = require('fs'),
    {promisify} = require('util')
const http = require('http');
const cors = require('cors')
app.use(cors())

const readFileAsync = promisify(readFile),
        writeFileAsync = promisify(writeFile) 

let db:any[] = []

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

app.use(express.urlencoded({extended:false}))
app.use(express.json())

app.get('/api/users',async(req,res)=>{
    await loadingDB()
    return res.json(db)
})

app.get('/api/users/:id',async(req,res)=>{
    await loadingDB()
    const {id} = req.params
    return db.find(data=>data.id===id)
})

app.post('/api/users',async(req,res)=>{
    const {name,country} = req.body
    console.log(name,country)
    await loadingDB()
    db.push({
        id: db.slice(-1)[0] ? db.slice(-1)[0].id + 1 : 1,
        name,
        country
    })
    await saveDB()
    return db
})
app.put('/api/users/:id',async(req,res)=>{
    const {id} = req.params
    const {name,country} = req.body
    await loadingDB()

    db = db.reduce((acc,curr)=>{
        if(curr.id===id) {
            curr.name = name
            curr.country = country
        }
        return acc.push(curr)
    },[])
    await saveDB()
})

app.delete('/api/users/:id',async(req,res)=>{
    const {id} = req.params
    await loadingDB()
    db = db.reduce((acc,curr)=>(
        curr.id===id?
            acc : acc.push(curr)
    ),[])
    await saveDB()
})

const server = http.createServer(app);

server.listen(3000,()=>console.log('listen in port 3000'))