const server = require("express").Router();
const capitalize = require('../suppliers/Capitalize')
const axios = require('axios')

server.get('/:name', async (req, res) => {
    const { name } = req.params;

    try{
        const champ = await axios.get(`http://ddragon.leagueoflegends.com/cdn/10.19.1/data/en_US/champion/${capitalize(name)}.json`)

        res.send(champ.data.data)
    } catch(err) { res.send(res.status(404).send('Campeon no encontrado')) }
})

server.get('/img/:name', async (req, res) => {
    const { name } = req.params;

    try{
        //const img = await axios.get(`http://ddragon.leagueoflegends.com/cdn/10.19.1/img/champion/${capitalize(name)}.png`)

        //console.log(img)

        //res.send(img)
    } catch(err) { res.send(res.status(404).send('Imagen de Campeon no encontrada')) }
})


module.exports = server