import React, { Component } from "react";
class Kain extends Component {
    state = {
        isi: 0
    }
     componentDidMount(){
        alert('Show Kain! (Proses mount)')
}
    tambahisi = () => {
        this.setState((state) => { return { isi: state.isi + 1 } })
    }
    kurangiisi = () => {
        this.setState((state) => { return { isi: state.isi - 1} })
    }
    componentWillUnmount(){
        alert('Hide Kain gan (Unmount)!')
    }
    render() {
        return (
            <div>
            <h3>(Beli Kain Minimal 1 Meter)</h3>
                <p>1. Kain 1 Meter = Rp. 65.000</p>
                <p>2. Kain 2 Meter = Rp. 130.000</p>
                <p>3. Kain 3 Meter = Rp. 195.000</p>
                <h4>KAIN YANG MAU DI BELI : {this.state.isi} Meter</h4>
                
                <button onClick={this.tambahisi}>Tambah</button>
                <button onClick={this.kurangiisi}>Kurang</button>
                <br/>
                <p>{this.state.isi}</p>
            </div>
        );
    }
}
export default Kain;