import React from 'react';
import {Link} from 'react-router-dom';

export default function ChampCard(props) {
        const {img,name,lore}=props
    return (
        <div className="card" style="width:400px">
                <img className="card-img-top" src={img} alt="Card image"/>
                <div className="card-body">
                    <h4 className="card-title">{name}</h4>
                    <p className="card-text">{lore}</p>
                    <Link className='btn btn-success'>Ver Detalle</Link>
                </div>
        </div>
        )
}
