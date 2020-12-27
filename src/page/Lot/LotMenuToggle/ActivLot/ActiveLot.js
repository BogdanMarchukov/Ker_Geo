import React from 'react';
import {Button, Container} from "react-bootstrap";
import classes from "./ActiveLot.module.css"
import {useLot} from "../../ContextLot/ContextLot";
import {useMenu} from "../ContextMenuToggle/ContextMenuToggle";

const ActiveLot = () => {
    const {fetchActiveLot} = useLot()
    const {itemsActiveLot} = useLot()
    const {disabledSearch} = useMenu()

    return (
        <Container className={classes.ActiveLot}>
            <Button
                disabled={disabledSearch}
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