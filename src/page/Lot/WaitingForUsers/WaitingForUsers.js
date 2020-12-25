import React from 'react';
import classes from "./WaitingForUsers.module.css"
import {Container} from "react-bootstrap";
import {useLot} from "../ContextLot/ContextLot";

const WaitingForUsers = () => {
    const {waitingUsers} = useLot()
    if (waitingUsers === true) {
        return (
            <Container className={classes.waiting}>
                <h3>Ждем всех участников...</h3>
            </Container>
        );
    } else return null


};

export default WaitingForUsers;