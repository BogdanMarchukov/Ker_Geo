import React, {useContext, useState, useEffect} from 'react';
import Axios from "axios";
import {useMenu} from "../LotMenuToggle/ContextMenuToggle/ContextMenuToggle";

const LotContext = React.createContext()

export const useLot = () => useContext(LotContext)


export const LotProvider = ({children}) => {

    const [disabledButtonNewLot, setDisabledButtonNewLot] = useState(false) // disabled button newLot
    const [itemsActiveLot, setItemsActiveLot] = useState([]) // список активных споров
    const [timer, setTimer] = useState(null) // таймер обратного отсчета
    const [fetchUsers, setFetchUsers] = useState([]) // список участников спора
    const [userNumber, setUserNumber] = useState(0) // выброшенное число
    const [showProcessing, setShowProcessing] = useState(false) // показать/убрать процесс жребья
    const [chance, setChance] = useState(3) // колличество попыток
    const [showResult, setShowResult] = useState(true) // показать итог жребия // TODO изменить на false

    // сздание нового жребия
    const {activeUser} = useMenu()
    const {toggle} = useMenu()
    const newLot = async () => {
        toggle()
        try {
            const response = await Axios.post(
                'https://geo-ker.firebaseio.com/lot/active.json', {activeUser, action: true})
            localStorage.setItem('activeLot', response.data.name)
            setDisabledButtonNewLot(true)
            setTimer(15)
        } catch (e) {
            alert(e)
        }
    }


    // удаление активного спора (удаление списка активных лотов) /// загрузка списпа участников
    const deleteActionLot = async () => {
        let item = []
        const itemDelete = localStorage.getItem('activeLot')
        try {
            await Axios.patch(
                `https://geo-ker.firebaseio.com/lot/active/${itemDelete}.json`, {action: false})
            const response = await Axios.get(
                `https://geo-ker.firebaseio.com/lot/active/-MPDuSdR_kM0AZhZYGB_/users.json`) //TODO не забыть поменять адрес загрузки
            for (let key in response.data) {
                item.push(<li key={key}>{response.data[key]}</li>)
            }
            setFetchUsers(item)
        } catch (e) {
            console.error(e)
        }
    }


    // таймер
    useEffect(() => {
        if (timer > 0) {
            setTimeout(() => setTimer(prev => prev - 1), 1000)
        } else if (timer === 0) {
            setTimer(null)
            deleteActionLot()
            setShowProcessing(true)
        }
    }, [timer])


    // Поиск активных споров,
    const fetchActiveLot = async () => {
        let item = []
        setItemsActiveLot('Загрузка...')
        try {
            const response = await Axios.get('https://geo-ker.firebaseio.com/lot/active.json')
            for (let key in response.data) {
                if (response.data[key].action === true) {
                    item.push(<li key={key} className={'mt-3'}>{response.data[key].activeUser}</li>)
                }

            }
            setItemsActiveLot(item)
        } catch (e) {
            alert(e)
        }
    }
    // генирация случайного числа
    const randomNumber = () => {
        let number = Math.ceil(Math.random() * 100)
        setUserNumber(number)
        setChance(prevState => prevState - 1)
    }
        // блокировка кнопки Выбросить число
    const disabledButton = () => {
        if (chance === 0) {
            return true
        }
        else return false
    }


    return (
        <LotContext.Provider value={{
            newLot,
            disabledButtonNewLot,
            fetchActiveLot,
            itemsActiveLot,
            timer,
            fetchUsers,
            userNumber,
            randomNumber,
            showProcessing,
            chance,
            disabledButton,
            showResult
        }}

        >
            {children}
        </LotContext.Provider>
    );

};

