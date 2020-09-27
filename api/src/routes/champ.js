const server = require("express").Router();
const capitalize = require('../suppliers/Capitalize')
const axios = require('axios')

// array de campeones encontrados
let champions = []

server.get('/champions', (req, res) => {
    res.send(champions)
})

server.get('/:name', async (req, res) => {
    const { name } = req.params;

    try{
        // consulta a campeon
        const champ = await axios.get(`http://ddragon.leagueoflegends.com/cdn/10.19.1/data/en_US/champion/${capitalize(name)}.json`)

        const data = champ.data.data[capitalize(name)]
        const img = data.image.full

        const obj = {
            champ: data,
            img: `http://ddragon.leagueoflegends.com/cdn/10.19.1/img/champion/${img}`
        }

        champions.push(obj)
        res.send(obj)
    } catch(err) { 
        res.send(res.status(404).send('Campeon no encontrado')) 
    }
})

server.get('/delete/:name', async (req, res) => {
    const { name } = req.params;

    const newChamps = champions.filter((champ) => champ.champ.id !== capitalize(name))

    champions = newChamps
    res.send(newChamps)
})


module.exports = server