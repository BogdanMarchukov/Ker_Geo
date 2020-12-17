import React from 'react';
import classes from "./Lot.module.css"
import LotMenuToggle from "./LotMenuToggle/LotMenuToggle";
import Toggle from "./LotMenuToggle/Toggle/Toggle";
import {MenuProvider} from "./LotMenuToggle/ContextMenuToggle/ContextMenuToggle";
import RegistrationWindow from "./RegistrationWindow/RegistrationWindow";


const Lot = () => {

    return (
        <div className={classes.lot}>
            <MenuProvider>
                <LotMenuToggle/>
                <Toggle/>
                <RegistrationWindow/>
            </MenuProvider>
        </div>
    );

};

export default Lot;