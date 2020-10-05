import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './VeuButton.module.css'

const VeuButton = props => {
    console.log(props)
    return (
        <div className={classes.VeuButton}>
            <NavLink to = "parametrse">
                <button>
                    ВЭУ-{props.name}
                </button>
            </NavLink>
        </div>
    );
}

export default VeuButton;
