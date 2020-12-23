import React from 'react';
import {Button, Col, Row, Container} from "react-bootstrap";
import classes from "./LotProcessing.module.css"
import {useLot} from "../ContextLot/ContextLot";

const LotProcessing = () => {
    const {userNumber} = useLot()
    const {fetchUsers} = useLot()
    const {randomNumber} = useLot()
    const {showProcessing} = useLot()
    const {chance} = useLot()
    const {disabledButton} = useLot()



    if (showProcessing === true) {
        return (
            <Container className={classes.processing}>
                <Row>
                    <Col xs={3}>
                        <Button
                            className={classes.btn}
                            variant={"success"}
                        >
                            сохранить
                        </Button>
                    </Col>
                    <Col xs={9}>
                        <h1>{userNumber}</h1>

                    </Col>
                </Row>

                <h4 className={'mt-1'}>Осталось попыток: {chance} </h4>
                <Button
                    disabled={disabledButton()}
                    onClick={randomNumber}
                    variant={"warning"}
                >
                    Выбросить число
                </Button>
                <h4>Участники: </h4>
                <ul>
                    {fetchUsers}
                </ul>
            </Container>
        );
    } else return null


};

export default LotProcessing;