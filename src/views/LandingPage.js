import React, {Component} from 'react';
import Fullpage, { FullPageSections, FullpageSection } from '@ap.cx/react-fullpage'

import Frame1 from '../components/frame1/frame1';
import Frame2 from '../components/frame2/frame2';
import Frame3 from '../components/frame3/frame3';
import Frame4 from '../components/frame4/frame4';
import Navbar from '../components/navbar';

class LandingPage extends Component{
 
    render(){
        return(
            <div>
                <Navbar />
                <Fullpage>
                    <FullPageSections>
                        <div className="body-img">

                            <FullpageSection>
                                <Frame1 />
                            </FullpageSection>

                            <FullpageSection>
                                <Frame2 />
                            </FullpageSection>

                            <FullpageSection>
                                <Frame3 />
                            </FullpageSection>

                            <FullpageSection>
                                <Frame4 />
                            </FullpageSection>

                        </div>
                    </FullPageSections>
                </Fullpage>
            </div>
        );
    }
}

export default LandingPage;