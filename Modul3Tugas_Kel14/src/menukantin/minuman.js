import React, { Component } from 'react';

class Minuman extends Component {
  state = {
    menu: ' ',
  };
  componentDidMount() {
    alert('Show Minuman (Proses mount)');
  }
  ChangeMenu = () => {
    this.setState((state) => {
      if (state.menu === '3. Es Coca = Rp. 8000') {
        return { menu: '5. Es Orang Tua = Rp. 10000' };
      } else {
        return { menu: '6. Es Susu = Rp. 8000' };
      }
    });
  };
  componentWillUnmount() {
    alert('Hide Minuman (Proses Unmount)!');
  }
  render() {
    return (
      <div>
        <h3>(Pilihan Menu Minuman)</h3>
        <p>1. Es Teh = Rp. 5000</p>
        <p>2. Es Buah = Rp. 10000</p>
        <p>3. Es Coca = Rp. 8000</p>
        <button onClick={this.ChangeMenu}>Pilihan lain</button>
        <br />
        <p>{this.state.menu}</p>
      </div>
    );
  }
}
export default Minuman;
