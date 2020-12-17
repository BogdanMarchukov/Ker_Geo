import React, {useContext, useState} from 'react';
import Axios from "axios";


const MenuContext = React.createContext()

export const useMenu = () => {
    return useContext(MenuContext)
}


export const MenuProvider = ({children}) => {
    const [cls, setCls] = useState('openMenu') // state Menu
    const [icon, setIcon] = useState("fas fa-chevron-right") // state toggle
    const [registration, setRegistration] = useState(false) // state Registration

    // функция открытия/закрытия меню-жребий
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

    // Функция открытие/закрытия окна регистрации
    const openReg = () => setRegistration(prevState => !prevState)


    // данные из input формы регистрации
    let name = '';
    let password = '';

    // сохранения данных inputName в переменную
    const inputNameHandler = event => name = event.target.value

    // сохранения данных inputPassword в переменную
    const inputPasswordHandler = event => password = event.target.value

    // отправка регистрационных данных на сервер
    const registrationDate = async () => {
        if (name && password !== '') {
            let user = {};
            user.name = name
            user.password = password
            try {
                openReg()
                await Axios.post('https://geo-ker.firebaseio.com/lot.json', user)
            } catch (e) {
                console.log(e)
            }
        }

    }


    return (
        <MenuContext.Provider value={{
            visible: cls,
            toggle,
            icon,
            registration,
            openReg,
            registrationDate,
            inputNameHandler,
            inputPasswordHandler

        }}>
            {children}
        </MenuContext.Provider>
    );

};

