import React, { useState } from 'react'
import { useSelector, useDispatch } from "react-redux";
import ChampCard from "./ChampCard"
import * as action from '../redux/actions'


export default function Container() {
    const dispatch = useDispatch()
    const campeones = useSelector(state=> state.champsName)
    const lista = useSelector(state=> state.resChamp)
    

  

    return (
        <div>
            <br/>
            <h1>WorkShop de Async-Await</h1>
            <h3>ft05-g5 PMs Tomas y Leandro</h3>
            <h2>ft05-g5 PMs parte 2</h2>

            <br/>
            <br/>
            {lista.length
                ?   // si hay campeones
                    <div>
                        <ul>
                                <ChampCard/>
                        </ul>

                    </div>
                :   // si no hay campeones
                    <button className='btn btn-info' onClick={''}>Buscar Campeones</button>
            }
        </div>
    )
}
