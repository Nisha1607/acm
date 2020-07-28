import React, { Component } from 'react';
import { Jumbotron } from 'reactstrap'; 
import Slider from './SliderComponent';

class Home extends Component{
    render() {
        return(
            <React.Fragment>
                <Jumbotron>
                <div className="container">
                        <div className="row row-header">
                            <div className="col-12 col-sm-6">
                                <h1>WCE ACM STUDENT CHAPTER</h1>
                            </div>      
                        </div>
                    </div>
                </Jumbotron>
                <Slider />    
            </React.Fragment>
        );
    }
}


export default Home;