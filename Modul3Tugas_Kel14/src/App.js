import React from 'react';
import './App.css';
import Home from './menukantin/home';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <div style={{ marginTop: '10px', marginLeft: '200px', marginRight: '200px', backgroundColor: 'grey' }}>
          <h1>Kantin Sekolah</h1>
          <h3>[Sejahtera kelompok 14 ]</h3>
          <div style={{ border: '5px solid red' }}>
            <Home />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
