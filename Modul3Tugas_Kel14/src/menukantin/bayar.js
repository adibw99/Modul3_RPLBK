import React, { Component } from 'react';
import Makanan from './makanan';
class Bayar extends Component {
  state = {
    makanan: ' ',
  };

  state = {
    minuman: '',
  };
  render() {
    return (
      <div>
        <Makanan />
        <button onClick={this.ChangeFashion}>Pilih Menu</button>
        <br />
        <p>
          Menu yang dipilih : {this.state.makanan} + {this.state.minuman}
        </p>
      </div>
    );
  }
}

export default Bayar;
