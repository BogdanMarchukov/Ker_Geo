import React from 'react';
import {Button, Container} from "react-bootstrap";
import classes from "./ResultLot.module.css"
import {useLot} from "../ContextLot/ContextLot";

const ResultLot = () => {
    const {showResult} = useLot()
    const {resultList} = useLot()
    const {winner} = useLot()
    const {endLot} = useLot()

    if (showResult === true) {
        return (
            <Container className={classes.ResultLot}>
                <h1>Поздравляем: <strong>{winner}</strong></h1>
                <ol>
                    {resultList}
                </ol>
                <Button
                    onClick={endLot}
                    variant={"warning"}
                >
                    Завершить
                </Button>
            </Container>
        );
    } else return null


};

export default ResultLot;