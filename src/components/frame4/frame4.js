import React, {Component} from 'react';

const bg4 = require("../../assets/Fundo/04.png");

class Frame4 extends Component{
 
    render(){
        return(
            <div className="container-home">
                <img src={bg4} class="d-block w-100 img-fluid" alt="frame1" />
                <div className="navbar-style">
                </div>
            </div>
        );
    }
}

export default Frame4;