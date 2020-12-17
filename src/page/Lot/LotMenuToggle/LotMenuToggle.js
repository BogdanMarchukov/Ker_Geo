import React from 'react';
import classes from "./LotMenuToggle.module.css"
import {useMenu} from "./ContextMenuToggle/ContextMenuToggle";
import {Container} from "react-bootstrap";
import Registration from "./Registration/Registration";
import CreateNewLot from "./CreateNewLot/CreateNewLot";
import Statistics from "./Statistics/Statistics";
import ActiveLot from "./ActivLot/ActiveLot";


const LotMenuToggle = () => {

    const cls = useMenu()

    return (
        <div className={classes[cls.visible]}>
            <Container className={classes.menu}>
                <h1>Меню</h1>
                <hr/>
                <Registration/>
                <Statistics/>
                <CreateNewLot/>
                <hr/>
                <h2>Активные споры</h2>
                <ActiveLot/>
            </Container>

        </div>

    );

};

export default LotMenuToggle;