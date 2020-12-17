import React from 'react';
import {Container} from "react-bootstrap";
import classes from "./ActiveLot.module.css"

const ActiveLot = () => {
    return (
        <Container className={classes.ActiveLot}>
            <ul>
                <li className='mt-3'>Богдан</li>
                <li className='mt-3'>Сергей</li>
            </ul>
        </Container>
    );

};

export default ActiveLot;