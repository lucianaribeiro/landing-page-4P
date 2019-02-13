import React, {Component} from 'react';

const start_btn = require("../../assets/Icones/botao.png");

class Content extends Component{

    render(){
        return(
            <div className="">
                    <div className="row justify-content-around align-items-center">
                        <div className="col-8">
                            <div class="content-text text-white font-weight-bold">
                                    <div className="title-content">
                                        <h1 class="text-left">
                                            <span>Cuide</span> do seu <span>bichinho</span> com apenas alguns <span>cliques</span>
                                        </h1>
                                    </div>
                            </div>
                            <div className="subtitle-content text-white">
                                <h5 class="text-left">
                                    O Quatro Patas permite que você cuide do seu pet sem precisar sair de casa
                                </h5>
                            </div>
                        <div className="start-btn">
                            <a href="#!"><img src={start_btn} alt="inscreva" className="float-left"/></a>
                        </div>
                        </div>
                    </div>
                    </div>
        );
    }
}

export default Content;