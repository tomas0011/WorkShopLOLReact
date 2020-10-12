import React from 'react';
// import {Link} from 'react-router-dom';

export default function ChampCard(props) {
   
    return (
        <div className="col-sm m-3">
            <div className="card container border row" style={{background:"black",color:'white'}} >
                
            <h1 className="card-title">{props.asd.name}</h1>
                <div className="container ">
                        <div className='justify-content-md-center row'>
                          <img className="card-img-top col" style={{maxWidth:300}} src={props.asd.img} alt="Card image"/>
                            <div className="col" style={{color:'gray',alignSelf: "center"}}>
                                <div className="column" >
                                    <div className=" row m-2">
                                        Vitalidad: 
                                    </div>
                                    <div className=" row m-2">
                                        Ataque: 
                                    </div>
                                    <div className=" row  m-2">
                                        Defensa: 
                                    </div>
                                    <div className=" row  m-2">
                                        Velocidad de ataque:
                                    </div>
                                </div>
                            </div>
                        </div>
                   </div>
                <div className="card-body ">
                    <p className="card-text">{props.asd.lore}</p>
                </div>
            </div>
        </div>
        )
}
