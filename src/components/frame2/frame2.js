import React, {Component} from 'react';

const bg2 = require("../../assets/Fundo/02.png");

class Frame2 extends Component{
 
    render(){
        return(
            <div className="container-home">
                <img src={bg2} class="d-block w-100 img-fluid" alt="frame2" />
            </div>
        );
    }
}

export default Frame2;