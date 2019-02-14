import React, {Component} from 'react';

class MosaicContent extends Component{
    
    render(){
        return(
            <div>
                <div className="mosaic-title text-white">
                    <h2>DIFERENCIAL</h2>
                </div>
                <div className="mosaic-sub text-white text-justify">
                    <h6> Além de oferecer <span>formas inovadoras</span> de cuidar
                        do seu pet relacionando os melhores <span>produtos</span>, <span>lojas</span> e <span>veterinários</span>,
                        o Quatro Patas também disponibiliza serviços como: 
                        <br />
                        <span>calendário de vacinas</span>,
                        <span> rações indicadas </span> e até <span>dog walkers</span>.
                    </h6>
                </div>
            </div>
        );
    }
}
export default MosaicContent;