import React, { useState } from 'react'
import { useSelector, useDispatch } from "react-redux";
import ChampCard from "./ChampCard"
import * as action from '../redux/actions'


export default function Container() {
    const dispatch = useDispatch()
    // todos los campeones
    const campeones = useSelector(state=> state.champsName)
    // 
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
                                <ChampCard/>  {/* Acá vamos a mapear todos los CAMPEONES*/}
                        </ul>

                    </div>
            :  <h2>'Aun no hay campeones'</h2>

            }
                    <button className='btn btn-info' onClick={actions.resolveChamp(campeones)}>Buscar Campeones</button>

        </div>
    )
}
