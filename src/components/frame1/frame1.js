import React, {Component} from 'react';
import Content from './content';

class Frame1 extends Component{
 
    render(){
        return(
            <div>
                <div className="container-img">
                    <div className="content-container">
                        <Content />
                    </div>
                </div>
            </div>
        );
    }
}

export default Frame1;