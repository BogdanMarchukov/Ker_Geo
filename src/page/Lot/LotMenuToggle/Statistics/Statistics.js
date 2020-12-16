import React from 'react';
import {Button, Container} from "react-bootstrap";
import classes from "./Statistics.module.css"

const Statistics = () => {
    return (
        <Container className={classes.content}>
            <Button
                variant='dark'
            >
                Статистика
            </Button>
        </Container>
    );

};

export default Statistics;