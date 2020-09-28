import React from 'react';
import {Link} from 'react-router-dom';

export default function ChampCard(props) {
   
    return (
        <div className="card container-fluid" style={{width:300}}>
                 <img className="card-img-top" src={props.asd.img} alt="Card image"/>
                <div className="card-body">
                    <h4 className="card-title">{props.asd.name}</h4>
                    <p className="card-text">{props.asd.lore}</p>
                </div>
        </div>
        )
}
