import React from 'react';
import classes from './Pipes.module.css'

const Pipes = props => {
    return (
        <div className={classes.Pipes}>
            <h1>Отметки труб</h1>
            <div className={classes.stringTable}>
                <p>6-труб:</p>
            </div>
            <div className={classes.stringTable}>
                <p>160-ая:</p>
            </div>
            <div className={classes.stringTable}>
                <p>200-ая:</p>
            </div>
            <button>Задать "0"</button>
        </div>
    );
}

export default Pipes;
