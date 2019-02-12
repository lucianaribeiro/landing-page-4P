import React, {Component} from 'react';

const bg3 = require("../../assets/Fundo/03.png");

class Frame3 extends Component{
 
    render(){
        return(
            <div className="container-home">
                <img src={bg3} class="d-block w-100 img-fluid" alt="frame1" />
                <div className="navbar-style">
                </div>
            </div>
        );
    }
}

export default Frame3;