import React from 'react';
// import {Link} from 'react-router-dom';
 import * as actions from "../redux/actions"; //Importamos todas las actions de redux

export default function ChampCard({id,name,description,img,stat}) {
   const {hp,attack,defense,attackSpeed} = stat ;



 const  handleBattle = (e) =>{
       actions.addBattle(e.target.name)

 }

    console.log(id,img,name)
    return (
        <div className="col-sm m-3">
            <div className="card container border row" style={{background:"black",color:'white'}} >
                
            <h1 className="card-title">{name}</h1>
                <div className="container ">
                        <div className='justify-content-md-center row'>
                          <img className="card-img-top col" style={{maxWidth:300}} src={img} alt="Card image"/>
                            <div className="col" style={{color:'purple',alignSelf: "center"}}>
                                <div className="column" >
                                    <div className=" row m-2">
                                        Vitalidad: {hp}
                                    </div>
                                    <div className=" row m-2">
                                        Ataque: {attack}
                                    </div>
                                    <div className=" row  m-2">
                                        Defensa: {defense}
                                    </div>
                                    <div className=" row  m-2">
                                        Velocidad de ataque: {attackSpeed}
                                    </div>
                                    <button className="btn btn-danger" name={id} onClick={(e)=>handleBattle(e)}>Agregar</button>
                                </div>
                            </div>
                        </div>
                   </div>
                <div className="card-body ">
                    <p className="card-text">{description}</p>
                </div>
            </div>
        </div>
        )
}
