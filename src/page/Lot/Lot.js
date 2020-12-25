import React from 'react';
import classes from "./Lot.module.css"
import LotMenuToggle from "./LotMenuToggle/LotMenuToggle";
import Toggle from "./LotMenuToggle/Toggle/Toggle";
import {MenuProvider} from "./LotMenuToggle/ContextMenuToggle/ContextMenuToggle";
import RegistrationWindow from "./RegistrationWindow/RegistrationWindow";
import Username from "./Username/Username";
import Login from "./Login/Login";
import {LotProvider} from "./ContextLot/ContextLot";
import Timer from "./Timer/Timer";
import LotProcessing from "./LotProcessing/LotProcessing";
import ResultLot from "./ResultLot/ResultLot";
import WaitingForUsers from "./WaitingForUsers/WaitingForUsers";


const Lot = () => {

    return (
        <div className={classes.lot}>
            <MenuProvider>
                <Username/>
                <Toggle/>
                <RegistrationWindow/>
                <Login/>

                <LotProvider>
                    <LotMenuToggle/>
                    <Timer/>
                    <LotProcessing/>
                    <ResultLot/>
                    <WaitingForUsers/>
                </LotProvider>
            </MenuProvider>
        </div>
    );

};

export default Lot;