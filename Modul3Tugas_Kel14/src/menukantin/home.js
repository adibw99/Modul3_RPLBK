import { Component } from 'react';
import React from 'react';
import Bayar from './bayar';
import Minuman from './minuman';
import Makanan from './makanan';

class home extends Component {
  state = {
    komponen1: true,
    komponen2: true,
    komponen3: true,
  };

  componentDidUpdate(prevProps, prevState, snapshot) {
    alert(`Makan Kenyang Hati Senang`);
  }

  shouldComponentUpdate(nextProps, nextState, nextContext) {
    return window.confirm('SELAMAT DATANG :)');
  }

  ubahkomponen1 = () => {
    this.setState((state) => {
      return { komponen1: !this.state.komponen1 };
    });
  };

  ubahkomponen2 = () => {
    this.setState((state) => {
      return { komponen2: !this.state.komponen2 };
    });
  };

  ubahkomponen3 = () => {
    this.setState((state) => {
      return { komponen3: !this.state.komponen3 };
    });
  };

  render() {
    return (
      <div>
        {this.state.komponen1 ? <Minuman /> : ''}
        <button onClick={this.ubahkomponen1}>{this.state.komponen1 ? 'HIDE' : 'SHOW'} Harga Makanan </button>
        <div style={{ border: '0.5px solid black' }}></div>
        {this.state.komponen2 ? <Makanan /> : ''}
        <button onClick={this.ubahkomponen2}>{this.state.komponen2 ? 'HIDE' : 'SHOW'} Menu </button>
        <div style={{ border: '0.5px solid black' }}></div>
        {this.state.komponen3 ? <Bayar /> : ''}
        <button onClick={this.ubahkomponen3}>{this.state.komponen3} Bayar </button>
      </div>
    );
  }
}
export default home;
