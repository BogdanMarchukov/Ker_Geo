import React from 'react';
import classes from "./Timer.module.css"
import {useLot} from "../ContextLot/ContextLot";

const Timer = () => {
    const {timer} = useLot()
    if (timer > 0) {
        return (
            <h2 className={classes.timer}>{timer}</h2>
        );
    } else return  null
};

export default Timer;