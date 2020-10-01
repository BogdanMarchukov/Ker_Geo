import React from 'react';
import classes from './ObjectButton.module.css'
import {NavLink} from 'react-router-dom'




const ObjectButton = props => {
    
        return (
            <div className={classes.ObjectButton}>
                <NavLink to="veu-options">
                    <button><p>{props.name}</p></button>
                </NavLink>
                
            </div>

           
        );

        
}

export default ObjectButton;
