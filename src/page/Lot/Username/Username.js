import React from 'react';
import {useMenu} from "../LotMenuToggle/ContextMenuToggle/ContextMenuToggle";
import classes from "./Username.module.css"

const Username = () => {
    const {initUser} = useMenu()
    const {activeUser} = useMenu()

    initUser()

    return (
        <h1 className={classes.Username}>
            Пользователь: {activeUser}
        </h1>
    );

};

export default Username;