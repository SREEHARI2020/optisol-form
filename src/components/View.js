import React, { Component } from 'react';
import CameraClass from './CameraClass';


import './View.css'


class View extends Component {
    render() {
        return (
            <div className="view-container">
            
             <CameraClass/>
            
            </div>
        );
    }
}

export default View;
