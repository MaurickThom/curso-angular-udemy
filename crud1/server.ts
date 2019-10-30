const express = require('express'),
    app = express(),
    {readFile,writeFile} = require('fs'),
    {promisify} = require('util')

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

app.use(express.urlencoded({extended:true}))
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
    await loadingDB()
    db.push({
        id: db.slice(-1)[0] ? db.slice(-1)[0].id + 1 : 1,
        name,
        country
    })
    await saveDB()
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



app.listen(3000,()=>console.log('listen in port 3000'))