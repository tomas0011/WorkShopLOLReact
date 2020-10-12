import React, { useState } from 'react'
import { useSelector, useDispatch } from "react-redux";
import * as actions from "../redux/actions";


export default function NavBar() {
    const dispatch = useDispatch()
    
    const [input, setInput] = useState('')

    // const champs = useSelector(state=>state.champsName)


    const handlerOnChange = (e) => {
        setInput(e.target.value)
    }
    
    const handlerOnSubmit = (e) => {
        e.preventDefault()
        console.log(input)
        if(input)
        dispatch(actions.getChamp(input))
         setInput('')
    }


    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark justify-content-center">
            <a className="navbar-brand" href="#">WorkShop LOL</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                    <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                </li>
                </ul>
                <form className="form-inline ">
                <input className="form-control mr-sm-2" value={input} type="search" placeholder="Search" aria-label="Search" onChange={handlerOnChange}/>
                   <button className="btn btn-outline-success my-2 my-sm-0" type="submit" onClick={(e)=>handlerOnSubmit(e)}>Buscar</button>
                </form>
            </div>
            </nav>
        </div>
    )
}