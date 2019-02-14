import React, {Component} from 'react';

const qrcode = require("../../assets/Icones/qrcode.png");
const googlePlay = require("../../assets/Icones/google-play.png");
const appStore = require("../../assets/Icones/app-store.png");

class Qrcode extends Component{
 
    render(){
        return(
            <div> 
                <div>
                    <img src={qrcode} alt="qrcode" className="w-100" />
                </div>
                <div className="download-btn">
                    <div className="play-btn"> 
                        <a href="https://play.google.com/store">
                            <img src={googlePlay} alt="qrcode" className="w-100" />
                        </a>
                    </div>
                    <div className="app-btn">
                        <a href="https://www.apple.com/br/ios/app-store/"> 
                            <img src={appStore} alt="qrcode" className="w-100" />
                        </a>
                    </div>
                </div>
            </div>
        );
    }
}

export default Qrcode;