const server = require("express").Router();
const capitalize = require('../suppliers/Capitalize')
const axios = require('axios')
const { Champion, Stat } = require('../db');

server.get('/all', async (req, res) => {
    res.send(await Champion.findAll({ include: { model: Stat } }))
})

server.post('/:name', async (req, res) => {
    const name = capitalize(req.params.name);

    const exist = await Champion.findOne({ where: { name } })
    
    if(exist) return res.status(400).send('El campeon ya existe')
    
    axios.get(`http://ddragon.leagueoflegends.com/cdn/10.19.1/data/en_US/champion/${name}.json`)
        .then(api => api.data.data[name])
        .then(champ => {
            const { stats } = champ;
            return {
                champ: {
                        name,
                        description: champ.lore,
                        img: `http://ddragon.leagueoflegends.com/cdn/10.19.1/img/champion/${champ.image.full}`
                    },
                stat: {
                        hp: stats.hp,
                        attack: stats.attackdamage,
                        defense: stats.armor,
                        attackSpeed: stats.attackspeed
                    }
            }
        })
        .then(async data => {
            const champ = await Champion.create(data.champ)
            const stat = await Stat.create(data.stat)
            await stat.setChampion(champ.dataValues.id)

            return {
                ...champ.dataValues,
                stat: stat.dataValues
            }
        })
        .then(champ => res.send(champ))
        .catch(err => {
            console.log(err)
            res.send(err)
        })
})

server.delete('/delete/:name', async (req, res) => {
    const name = capitalize(req.params.name);

    Champion.destroy({
            where: { name }
        })
        .then(d => d
            ? res.send('se elimino')
            : res.send('no se elimino')
        )
        .catch(err => res.send(err))
})


module.exports = server