import React, {Component} from 'react';
import QrcodeContent from './qrcodeContent';
import Qrcode from './qrcode';

class Frame4 extends Component{
 
    render(){
        return(
            <div className="container">
                <div className="frame4-img row justify-content-around">
                    <div className="col-4">
                        <QrcodeContent />
                    </div>
                    <div className="col-4">
                        <Qrcode />
                    </div>
                </div>
            </div>
        );
    }
}

export default Frame4;