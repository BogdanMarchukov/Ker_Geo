import React, { Component } from 'react';
import classes from './ParametersVeu.module.css'
import Deviations from './Deviations/Deviations'
import Pipes from './Pipes/Pipes'

class ParametersVeu extends Component {
    
    render() {
        return (
            <div className={classes.ParametersVeu}>
                <Deviations />
                <Pipes />
            </div>
        );
    }
}

export default ParametersVeu;
