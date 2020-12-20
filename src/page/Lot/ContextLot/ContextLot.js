import React, {useContext} from 'react';
import Axios from "axios";
import {useMenu} from "../LotMenuToggle/ContextMenuToggle/ContextMenuToggle";

const LotContext = React.createContext()

export const useLot = () => useContext(LotContext)


export const LotProvider = ({children}) => {
    const {activeUser} = useMenu()
    const newLot = async () => {

        try {
            const response = await Axios.post('https://geo-ker.firebaseio.com/lot/active.json', {activeUser})
            localStorage.setItem('activeLot', response.data.name)
        } catch (e) {
            alert(e)
        }
    }


    return (
        <LotContext.Provider value={{
            newLot
        }}

        >
            {children}
        </LotContext.Provider>
    );

};

