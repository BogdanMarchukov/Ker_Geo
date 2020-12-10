import React, { Component } from 'react';
import classes from './ParametersVeu.module.css'
import Deviations from './Deviations/Deviations'
import Pipes from './Pipes/Pipes'
import ButtonToHome from "../../components/ButtonToHome/ButtonToHome";

class ParametersVeu extends Component {
    
    render() {
        return (
            <div className={classes.ParametersVeu}>
                <div className={classes.buttonHome}>
                    <ButtonToHome/>
                </div>
                <Deviations />
                <Pipes />
            </div>
        );
    }
}

export default ParametersVeu;
