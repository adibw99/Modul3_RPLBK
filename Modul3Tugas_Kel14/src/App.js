import React from 'react';
import './App.css';
import Home from "./tokotenun/Home";


class App extends React.Component {
  
  render() {
    return (
      <div className="App">
        <div style={{ marginTop: "10px", marginLeft: "200px", marginRight: "200px", background: "rgba(0,255,255,1)" }}>                     
        <h1>BAKUL TENUN</h1>
        <h3>[Pusat Fashion Tenun "kelompok 48"]</h3>
        <div style={{ border: "5px solid red" }}>         
        <Home />
        </div>
        </div>
      </div>
    )
  }
}

export default App;