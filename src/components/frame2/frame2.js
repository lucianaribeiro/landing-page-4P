import React, {Component} from 'react';
import Bio from './bio';

const cell = require("../../assets/Icones/smartphone.png")

class Frame2 extends Component{
 
    render(){
        return(
            <div className="frame2-img">
                <div className="content-container">
                    <Bio />
                </div>
                <div>
                    <img src={cell} alt="cellphone" className="cell-img"/>
                </div>
            </div>
        );
    }
}

export default Frame2;