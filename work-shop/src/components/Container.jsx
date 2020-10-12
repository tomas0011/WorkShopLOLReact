import React from 'react';
import { useSelector } from "react-redux";
import ChampCard from "./ChampCard";
// import * as action from '../redux/actions';


export default function Container() {
    const campeones = useSelector(state=> state.champsName)

    
    

    return (
        <div>
        
                <div className='container'>
                    {campeones.map(campeon=>(
                                         <div className='row' key={campeon.id}>
                                            <ChampCard  {...campeon}/> 
                                        </div>       
                                        ))}
                </div>
        </div>
    )
}
