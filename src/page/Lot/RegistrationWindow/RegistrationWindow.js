import React from 'react';
import {Button, Container} from "react-bootstrap";
import classes from "./RegistrationWindow.module.css"
import {useMenu} from "../LotMenuToggle/ContextMenuToggle/ContextMenuToggle";



const RegistrationWindow = () => {
    const {registration} = useMenu()
    const {openReg} = useMenu()
    const {inputNameHandler} = useMenu()
    const {inputPasswordHandler} = useMenu()
    const {registrationDate} = useMenu()

    if (registration === true) {
        return (
            <Container className={classes.window}>
                <form>
                    <label> Регистрация
                        <input
                            onChange={inputNameHandler}
                            placeholder='Имя'
                        />
                        <input
                            onChange={inputPasswordHandler}
                            placeholder='Пароль'
                        />
                        <div className={classes.btn}>
                            <Button
                                onClick={registrationDate}
                                className={classes.btn1}
                                variant='success'
                            >
                                Сохранить
                            </Button>

                            <Button
                                onClick={openReg}
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

export default RegistrationWindow;