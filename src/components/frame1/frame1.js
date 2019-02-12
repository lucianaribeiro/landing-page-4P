import React, {Component} from 'react';

const bg1 = require("../../assets/Fundo/01.png");

class Frame1 extends Component{
 
    render(){
        return(
            <div className="container-home">
                <img src={bg1} class="d-block w-100 img-fluid" alt="frame1" />
                <div className="navbar-style">
                </div>
            </div>
        );
    }
}

export default Frame1;