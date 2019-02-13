import React, {Component} from 'react';
import Bio from './bio';

const cell = require("../../assets/Icones/smartphone.png")

class Frame2 extends Component{
 
    render(){
        return(
            <div className="container"> 
            <div className="frame2-img row justify-content-around">
                <div className="col-4">
                    <img src={cell} alt="cellphone" className="conjunto-img"/>
                </div>
                <div className="col-4">
                    <Bio />
                </div>
            </div>
            </div>
        );
    }
}

export default Frame2;