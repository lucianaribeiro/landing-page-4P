import React, {Component} from 'react';

const mosaic = require("../../assets/Icones/mosaico.png");

class Mosaic extends Component{
    
    render(){
        return(
            <div>
                <div>
                    <img src={mosaic} alt="shower" className="w-100" />
                </div>
            </div>
        );
    }
}
export default Mosaic;