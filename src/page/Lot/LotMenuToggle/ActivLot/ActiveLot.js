import React from 'react';
import {Button, Container} from "react-bootstrap";
import classes from "./ActiveLot.module.css"
import {useLot} from "../../ContextLot/ContextLot";

const ActiveLot = () => {
    const {fetchActiveLot} = useLot()
    const {itemsActiveLot} = useLot()

    return (
        <Container className={classes.ActiveLot}>
            <Button
                onClick={fetchActiveLot}
            >
                Поиск
            </Button>
            <ul>
                {itemsActiveLot}
            </ul>
        </Container>
    );

};

export default ActiveLot;