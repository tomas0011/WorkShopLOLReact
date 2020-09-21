import React, { useState } from 'react'
import { useSelector, useDispatch } from "react-redux";
import * as action from '../redux/actions'


export default function Container() {
    const dispatch = useDispatch()
    const campeones = useSelector(state=> state.champsName)
    const lista = useSelector(state=> state.resChamp)
    
    const infierno = async () => {

        const campeonesLista = campeones.map((campeon) => {
            return (async () => {
                const url = `http://ddragon.leagueoflegends.com/cdn/10.19.1/data/en_US/champion/${campeon}.json`
                const campeonFetch = await fetch(url)
                const campeonJson = await campeonFetch.json()

                dispatch(action.resolveChamp({
                    name: campeonJson.data[campeon].id,
                    img: campeonJson.data[campeon].image.full,
                    lore: campeonJson.data[campeon].lore
                }))
            })()
        })
    }

    return (
        <div>
            <br/>
            <h1>WorkShop de Async-Await</h1>
            <h3>ft05-g5 PMs Tomas y Leandro</h3>
            <br/>
            <br/>
            {lista.length
                ?   // si hay campeones
                    <div>
                        <ul>
                            {lista.map((champ)=>{
                                return <li key={champ.name}>
                                    <img src={`http://ddragon.leagueoflegends.com/cdn/10.19.1/img/champion/${champ.img}`} alt={champ.name}/>
                                </li>
                            })}
                        </ul>

                    </div>
                :   // si no hay campeones
                    <button className='btn btn-info' onClick={infierno}>Buscar Campeones</button>
            }
        </div>
    )
}
