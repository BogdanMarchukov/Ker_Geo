import React from 'react';
import {Container} from "react-bootstrap";
import classes from "./Connecting.module.css"
import {useLot} from "../ContextLot/ContextLot";

const Connecting = () => {
    const {connecting} = useLot()

    if(connecting === true) {
        return (
            <Container className={classes.connecting}>
                <h3>Ожидаем начало...</h3>
            </Container>
        );
    } else return null


};

export default Connecting;