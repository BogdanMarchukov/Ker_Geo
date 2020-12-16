import React from 'react';
import {Button, Col, Row} from "react-bootstrap";

const Registration = () => {
    return (
        <Row>
            <Col xs={4}>
                <Button
                    variant='success'
                >
                    Вход
                </Button>
            </Col>
            <Col xs={8}>
                <Button
                    variant='primary'
                >
                    Регистрация
                </Button>
            </Col>
        </Row>
    );

};

export default Registration;