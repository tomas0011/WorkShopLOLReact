import React from 'react';
import { useSelector } from "react-redux";
// import * as action from '../redux/actions';
import backgroundimg from "./img/BattleBackground.jpg"
import BattleCard from   "./BattleCard"

export default function BattleGround() {
    const batalla = useSelector(state=> state.battle)

    
    return (
        <div style={{height:800,backgroundSize:"cover",backgroundImage:`url(${backgroundimg})`,backgroundRepeat:'no-repeat', backgroundPosition:'left top'}}>
        

            <div className='container row justify-content-center' style={{color:'white'}}>

                        <div className='col' style={{marginLeft:'30%'}}>
                                <BattleCard id={1}/>
                        </div>

                        <div  className='col'>
                              <img style={{maxWidth:50}} src={'https://cdn.pixabay.com/photo/2014/03/25/15/24/swords-296741_960_720.png' } alt='VS' />
                        </div>


                        <div  className='col'>
                                <BattleCard id={2}/>
                        </div>
                
            </div>
        </div>
    )
}
