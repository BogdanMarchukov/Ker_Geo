import React, {useContext, useState} from 'react';


const MenuContext = React.createContext()

export const useMenu = () => {
    return useContext(MenuContext)
}


export const MenuProvider = ({children}) => {
    const [cls, setCls ] = useState('openMenu')
    const [icon, setIcon] = useState("fas fa-chevron-right")

    const toggle = () => setCls(prevState => {
        if (prevState === 'openMenu') {
            setIcon("fas fa-chevron-left")
            return 'close'
        }
        if (prevState === 'close') {
            setIcon("fas fa-chevron-right")
            return 'openMenu'
        }
    })

    return (
        <MenuContext.Provider value={{
            visible: cls,
            toggle,
            icon
        }}>
            {children}
        </MenuContext.Provider>
    );

};

