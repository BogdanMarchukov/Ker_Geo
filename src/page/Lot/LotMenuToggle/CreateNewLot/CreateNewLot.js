import React from 'react';
import {Button, Container} from "react-bootstrap";
import classes from "./CreateNewLot.module.css"

const CreateNewLot = () => {
    return (
        <Container className={classes.content}>
            <Button
                variant='warning'
            >
                Новый жребий
            </Button>
        </Container>
    );

};

export default CreateNewLot;