import React from 'react';
import classes from "./Toggle.module.css"
import {useMenu} from "../ContextMenuToggle/ContextMenuToggle";

const Toggle = () => {
    const {toggle} = useMenu()
    const {visible} = useMenu()
    const {icon} = useMenu()


    return (
        <>
            <i className={`${icon} ${classes[visible]}`} onClick={toggle}/>
        </>
    );

};

export default Toggle;