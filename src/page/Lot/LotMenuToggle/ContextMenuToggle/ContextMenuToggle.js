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
    const [activeUser, setActiveUser] = useState('Вход не выполнен') // активный пользователь
    const [login, setLogin] = useState(false) // окно Login
    const [loginName, setLoginName] = useState('') // данные из input Login
    const [loginPassword, setLoginPassword] = useState('') // данные из input Login
    const [LoginLoading, setLoginLoading] = useState('Вход') // Загрузка данных


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

    // открытие окна Login
    const openLogin = () => {
        if (registration === true) {
            setRegistration(false)
        }
        toggle()
        setLogin(prev => !prev)
        setLoginLoading('Вход')
    }

    // запись в state loginName из input Login
    const loginNameInputHandler = e => {
        setLoginName(e.target.value)
    }
    // запись в state loginPassword из input Login
    const loginPasswordInputHandler = e => {
        setLoginPassword(e.target.value)
    }



    // Отправка и проверка логина и пароля
    const loginCheck = async () => {
        setLoginLoading('Загрузка...')
        try {
            const response = await Axios.get('https://geo-ker.firebaseio.com/lot/user.json')

            for (let key in response.data) {
                if (response.data[key].name === loginName && response.data[key].password === loginPassword) {
                    localStorage.setItem('user', key)
                    setLoginLoading('Вход')
                    openLogin()
                    return true
                }else setLoginLoading('неверный пароль')
            }
        }
        catch (e) {
            alert(e)
        }
    }


    // Функция открытие/закрытия окна регистрации
    const openReg = () => {
        if (login === true) {
            setLogin(false)
        }
        toggle()
        setRegistration(prevState => !prevState)
    }


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
                const response = await Axios.post('https://geo-ker.firebaseio.com/lot/user.json', user)
                localStorage.setItem('user', response.data.name)
                setActiveUser(name)

            } catch (e) {
                console.log(e)
            }
        }

    }

    // инициализация пользователя (авто Login)
    const initUser = async () => {
        let key = localStorage.getItem('user')

        if (key !== null) {
            try {
                const responsive = await Axios.get(`https://geo-ker.firebaseio.com/lot/user/${key}.json`)
                setActiveUser(responsive.data.name)
            } catch (e) {
                alert(e)
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
            inputPasswordHandler,
            activeUser,
            initUser,
            login,
            openLogin,
            loginNameInputHandler,
            loginPasswordInputHandler,
            LoginLoading,
            loginCheck

        }}>
            {children}
        </MenuContext.Provider>
    );

};

