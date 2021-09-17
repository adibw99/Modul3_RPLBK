import React, { Component } from 'react';
import sample from './sample';
class Makanan extends Component {
  state = {
    isi: 0,
  };

  componentDidMount() {
    alert('Show Makanan (Proses mount)');
  }

  componentWillUnmount() {
    alert('Hide Maknaan (Unmount)!');
  }

  tambahisi = () => {
    this.setState((state) => {
      return { isi: state.isi + 1 };
    });
  };
  kurangiisi = () => {
    this.setState((state) => {
      return { isi: state.isi - 1 };
    });
  };

  constructor(props) {
    super(props);

    this.state = {
      menuMakanan: [
        ['Soto', 5000],
        ['Nasi Goreng', 1000],
        ['Mie Godok', 5000],
      ],

      pilih: {
        beliMakanan: 0,
      },

      totalMakanan: 0,
    };
  }

  render() {
    // const { menuMakanan } = this.state;

    return (
      <div>
        <h3>(Menu Makanan)</h3>
        <p>
          1. {this.state.menuMakanan[0][0]} = Rp.{this.state.menuMakanan[0][1]}
        </p>
        <p>
          2. {this.state.menuMakanan[1][0]} = Rp.{this.state.menuMakanan[1][1]}
        </p>
        <p>
          3. {this.state.menuMakanan[2][0]} = Rp.{this.state.menuMakanan[2][1]}
        </p>
        Select numbers:
        <select id="none">
          <option>1. {this.state.menuMakanan[0][0]}</option>
          <option>2. {this.state.menuMakanan[1][0]}</option>
          <option>3. {this.state.menuMakanan[2][0]}</option>
        </select>
      </div>
    );
  }
}
export default Makanan;
