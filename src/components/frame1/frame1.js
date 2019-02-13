import React, {Component} from 'react';
import Content from './content';

const conjunto = require("../../assets/Icones/conjunto.png");

class Frame1 extends Component{
 
    render(){
        return(
            <div className="frame1-img">
                <div className="content-container">
                    <Content />
                </div>
                <div>
                    <img src={conjunto} alt="conjunto" className="conjunto-img"/>
                </div>
            </div>
        );
    }
}

export default Frame1;