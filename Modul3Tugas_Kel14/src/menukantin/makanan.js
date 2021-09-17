import React, { Component } from 'react';
class Makanan extends Component {
  state = {
    isi: 0,
  };
  componentDidMount() {
    alert('Show Kain! (Proses mount)');
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
  componentWillUnmount() {
    alert('Hide Kain gan (Unmount)!');
  }
  render() {
    return (
      <div>
        <h3>(Menu Makanan)</h3>
        <p>1. Soto = Rp. 5.000</p>
        <p>2. Nasi Goreng= Rp. 10.000</p>
        <p>3. Mie Godok = Rp. 5.000</p>
        <h4>Pilih Makanan : {this.state.isi}</h4>

        <button onClick={this.tambahisi}>Tambah</button>
        <button onClick={this.kurangiisi}>Kurang</button>
        <br />
        <p>{this.state.isi}</p>
      </div>
    );
  }
}
export default Makanan;
