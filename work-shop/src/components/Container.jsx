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
    
        function handleSumbit(){
            action.resolveChamp(campeones)
        }

    return (
        <div>
        
                <div className='container row'>

                     <ul >
                        
                    {campeones.map(campeon=>(
                                    <li style={{float:'left'}} key={campeon.champ.key}>
                                        <ChampCard  asd={{img:campeon.img,name:campeon.champ.id,lore:campeon.champ.lore }}/> 
                                     </li>
                                 ))}
                     </ul>
                </div>
        </div>
    )
}
