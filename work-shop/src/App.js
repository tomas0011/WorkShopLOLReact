import React from 'react';
import './App.css';
import Container from './components/Container';
import NavBar from './components/NavBar';
import { Route } from "react-router-dom";
import BattleGround from './components/BattleGround';
// import { useSelector, useDispatch } from "react-redux";
// import * as actions from "./redux/actions"; //Importamos todas las actions de redux

function App() {
  return (
    <div className="App">

      <Route path="/" component={NavBar} />
      <Route exact path="/" component={Container} />
      <Route exact path="/battleground" component={BattleGround} />


      {/* <Route exact path="/" component={} />
      <Route path="/" component={} /> */}
    </div>
  );
}

export default App;
