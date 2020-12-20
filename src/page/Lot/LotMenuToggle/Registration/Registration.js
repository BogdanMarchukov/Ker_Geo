import React from 'react';
import {Button, Col, Row} from "react-bootstrap";
import {useMenu} from "../ContextMenuToggle/ContextMenuToggle";

const Registration = () => {
    const {openReg} = useMenu()
    const {openLogin} = useMenu()
    return (
        <Row>
            <Col xs={4}>
                <Button
                    onClick={openLogin}
                    variant='success'
                >
                    Вход
                </Button>
            </Col>
            <Col xs={8}>
                <Button
                    onClick={openReg}
                    variant='primary'
                >
                    Регистрация
                </Button>
            </Col>
        </Row>
    );

};

export default Registration;