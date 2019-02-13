import React, {Component} from 'react';
import Frame1 from '../components/frame1/frame1';
import Frame2 from '../components/frame2/frame2';
import Frame3 from '../components/frame3/frame3';
import Frame4 from '../components/frame4/frame4';
import Navbar from '../components/navbar';

class LandingPage extends Component{
 
    render(){
        return(
            <div className="body-img">
                <Navbar />
                <Frame1 />
                <Frame2 />
                <Frame3 />
                <Frame4 />
            </div>
        );
    }
}

export default LandingPage;