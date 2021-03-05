import React, { Component } from 'react';
import CameraComponent from './CameraComponent';
import './View.css'

class View extends Component {
    render() {
        return (
            <div className="view-container">
             <CameraComponent/>
            </div>
        );
    }
}

export default View;
