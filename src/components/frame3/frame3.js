import React, {Component} from 'react';
import Mosaic from './mosaic';
import MosaicContent from './mosaicContent';

class Frame3 extends Component{
 
    render(){
        return(
            <div className="container">
                <div className="frame3-img row justify-content-around">
                    <div className="col-4">
                        <Mosaic />
                    </div>
                    <div className="col-4">
                        <MosaicContent />
                    </div>
                </div>
            </div>
        );
    }
}

export default Frame3;