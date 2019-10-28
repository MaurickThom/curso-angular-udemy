const request = require('request')
const express = require('express')
const path = require('path');
const app = express()
// const router = express.Router();
const port = process.env.PORT || 3000;
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
app.get('/api/spotify/:client_id/:client_secret', (req, resp) => {

    let client_id = req.params.client_id;
    let client_secret = req.params.client_secret;
    let spotifyUrl = 'https://accounts.spotify.com/api/token';

    const authOptions = {
        url: spotifyUrl,
        headers: {
            Authorization: 'Basic ' + new Buffer(client_id + ':' + client_secret).toString('base64')
        },
        form: {
            grant_type: 'client_credentials'
        },
        json: true
    };
    request.post(authOptions, (err, httpResponse, body) => {

        if (err) {
            return resp.status(400).json({
                ok: false,
                mensaje: 'No se pudo obtener el token',
                err
            })
        }
        resp.json(body);
    });
});

app.get('/api',(req,res)=>{
    return res.json({
        message:'Servidor corriendo junto a angular'
    })
})


app.listen(port, ()=> {
    console.log(`Servidor corriendo en puerto ${ port }`);
});