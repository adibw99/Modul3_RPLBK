import React, { Component } from "react";
class Fashion extends Component {
    state = {
        internet: " "
    }
    componentDidMount(){
        alert('Show Fashion! (Proses mount)')
    }
    ChangeFashion = () => {
        this.setState((state) => { 
            if (state.internet === "Kemeja Tenun Pria = 155.000") {
                return {internet : "Baju Anak Tenun = 80.000"}   
            } else {
                return {internet : "Long Dress Wanita = 170.000"}                 
            }
        })
    }
  componentWillUnmount(){
        alert('Hide Fashion (Proses Unmount)!')
    }
    render() {
        return (
            <div>  
             <h3>(Fashion tenun murah, untuk model lain ada di menu "PILIHAN"!)</h3>                       
                <p>1. Kimono Tenun = Rp. 120.000</p>  
                <p>2. Celana Tenun =Rp. 50.000</p>
                <p>3. Peci Tenun = Rp. 25.000</p>
                <p>4. Godie Bag Tenun = Rp. 70.000</p>

                <button onClick={this.ChangeFashion}>Pilihan lain</button>
                <br />
                <p>{this.state.internet}</p>
            </div>
        );
    }
}
export default Fashion;