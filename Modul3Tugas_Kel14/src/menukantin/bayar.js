import React, { Component } from 'react';

class Bayar extends Component {
  state = {
    bayar: ' ',
  };
  render() {
    return (
      <div>
        <button onClick={this.ChangeFashion}>Bayar</button>
        <br />
        <p>Total Harga : {this.state.bayar}</p>
      </div>
    );
  }
}

export default Bayar;
