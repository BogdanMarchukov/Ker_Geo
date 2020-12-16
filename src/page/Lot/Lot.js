import React from 'react';
import classes from "./Lot.module.css"
import LotMenuToggle from "./LotMenuToggle/LotMenuToggle";
import Toggle from "./LotMenuToggle/Toggle/Toggle";
import {MenuProvider} from "./LotMenuToggle/ContextMenuToggle/ContextMenuToggle";


const Lot = () => {

    return (
        <div className={classes.lot}>
            <MenuProvider>
                <LotMenuToggle/>
                <Toggle/>
            </MenuProvider>
        </div>
    );

};

export default Lot;