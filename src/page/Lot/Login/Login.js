import React from 'react';
import {Button, Container} from "react-bootstrap";
import classes from "./Login.module.css"
import {useMenu} from "../LotMenuToggle/ContextMenuToggle/ContextMenuToggle";

const Login = () => {
    const {login} = useMenu()
    const {openLogin} = useMenu()
    const {loginNameInputHandler} = useMenu()
    const {loginPasswordInputHandler} = useMenu()
    const {LoginLoading} = useMenu()
    const {loginCheck} = useMenu()

    if (login === true) {
        return (
            <Container className={classes.window}>
                <form>
                    <label> {LoginLoading}
                        <input
                            onChange={loginNameInputHandler}
                            placeholder='Имя'
                        />
                        <input
                            onChange={loginPasswordInputHandler}
                            placeholder='Пароль'
                        />
                        <div className={classes.btn}>
                            <Button
                                onClick={loginCheck}
                                className={classes.btn1}
                                variant='success'
                            >
                                Отправить
                            </Button>

                            <Button
                                onClick={openLogin}
                                variant='dark'
                            >
                                Отмена
                            </Button>
                        </div>
                    </label>
                </form>
            </Container>
        );
    } else return null


};


export default Login;