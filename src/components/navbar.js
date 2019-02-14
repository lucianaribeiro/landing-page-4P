import React, {Component} from 'react';

const logo = require("../assets/Icones/logo-branca.png");

class Navbar extends Component{

    render(){
        return(
            <div>
                <nav class="navbar fixed-top navbar-expand-md navbar-light bg-faded">
                    <div class="container">
                        <div className="row">
                            <a class="navbar-brand" href="#!">
                                <img src={logo} alt="logo" />
                            </a>
                        </div>
                        <div class="collapse navbar-collapse" id="navbarNavDropdown">
                            <div class="container">
                                <ul class="navbar-nav row">
                                    <li class="nav-item active col-sm">
                                        <a class="nav-link text-white" href="#!">HOME</a>
                                    </li>
                                    <li class="nav-item col-sm">
                                        <a class="nav-link text-white" href="#!">QUEM SOMOS</a>
                                    </li>
                                    <li class="nav-item col-sm">
                                        <a class="nav-link text-white" href="#!">CONTATO</a>
                                    </li>
                                    <li class="">
                                        <div class="vertical-line"></div>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link text-white font-weight-bold" href="#!">ENTRAR</a>
                                    </li>                       
                                </ul>
                            </div>
                        </div>  
                        </div>
                    </nav>
            </div>
        );
    }
}
export default Navbar;