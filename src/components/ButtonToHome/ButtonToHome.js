import React from 'react';
import classes from './ButtonToHome.module.css'
import {Button} from "react-bootstrap";
import {NavLink} from "react-router-dom";


const ButtonToHome = () => {
    return (
        <>
            <NavLink
                to="/"
            >
                <Button
                    variant={'outline-danger'}
                    className={classes.btn}
                >
                    <i
                        className="fas fa-home"
                    >

                    </i>
                </Button>
            </NavLink>
        </>
    );
};

export default ButtonToHome;