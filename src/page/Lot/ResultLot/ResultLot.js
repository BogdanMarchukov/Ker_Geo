import React from 'react';
import {Button, Container} from "react-bootstrap";
import classes from "./ResultLot.module.css"
import {useLot} from "../ContextLot/ContextLot";

const ResultLot = () => {
    const {showResult} = useLot()

    if (showResult === true) {
        return (
            <Container className={classes.ResultLot}>
                <h1>Поздравляем: <strong>Богдан</strong> : 100</h1>
                <ol>
                    <li>Богдан- 100</li>
                    <li>Юра - 87</li>
                    <li>Галя - 65</li>
                </ol>
                <Button
                    variant={"warning"}
                >
                    Завершить
                </Button>
            </Container>
        );
    } else return null


};

export default ResultLot;