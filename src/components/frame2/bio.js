import React, {Component} from 'react';

const logo = require("../../assets/Icones/logo-branca-2x.png")
class Bio extends Component{

    render(){
        return(
            <div className="">
                <div className="row justify-content-around align-items-center">
                        <div className="col-8">
                            <div>
                                <div className="title-frame2">
                                    <img src={logo} alt="logo" className="logo-title"/>
                                </div>
                            </div>
                            <div className="sub-content text-white">
                                <h6 class="text-left">
                                    O <span>Quatro Patas</span> oferece para você diversas formas práticas e simples 
                                    de <span>cuidar</span> do seu <span>bichinho</span> com apenas alguns cliques utilizando o
                                     <span> aplicativo</span>.
                                </h6>
                            </div>
                        </div>
                    </div>
            </div>
        );
    }
}
export default Bio;