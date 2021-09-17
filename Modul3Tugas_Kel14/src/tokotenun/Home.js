import { Component } from "react";
import React from "react";
import Fashion from "./Fashion";
import Kain from "./Kain";

class Home extends Component {
    state = {
        komponen1: true,
        komponen2: true,
    }
      componentDidUpdate(prevProps, prevState, snapshot) {
        alert(`Happy Shopping`)
    }
    shouldComponentUpdate(nextProps, nextState, nextContext) {
        return window.confirm('SELAMAT DATANG :)');
    }
    ubahkomponen1 = () => {
        this.setState((state) => {
            return { komponen1: !this.state.komponen1 }
        })
    }
    ubahkomponen2 = () => {
        this.setState((state) => {
            return { komponen2: !this.state.komponen2 }
        })
    }
    render() {
        return (
            <div>
                {this.state.komponen1 ? <Kain /> : ''}
                <button onClick={this.ubahkomponen1}>{this.state.komponen1 ? 'HIDE' : 'SHOW'} Harga Kain </button>
                <div style={{ border: "0.5px solid black" }}>
                </div>
                {this.state.komponen2 ? <Fashion /> : ''}
                <button onClick={this.ubahkomponen2}>{this.state.komponen2 ? 'HIDE' : 'SHOW'} Menu Fashion</button>
            </div>
        );
    }
}
export default Home;