import classes from './LoaderSave.module.css';
import React from 'react';

const LoaderSave = props => {
    if(props.startLoad === true){
        return (
            <div className={classes.Loader}>
                <div /><div />
    
            </div>
        )
    }else if (props.startLoad === false){
        return (
            <div className={classes.finishLoad}>
                <i className={"fas fa-check"}  />
            </div>
        )
    }else return null
       
    
}

export default LoaderSave;
