import React from 'react';
import classes from './ObjectButton.module.css'

const ObjectButton = props => {
    
        return (
            <div className={classes.ObjectButton}>
                <button><p>{props.name}</p></button>
                
            </div>
        );

}

export default ObjectButton;
