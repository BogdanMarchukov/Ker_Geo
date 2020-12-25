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
    const [showResult, setShowResult] = useState(false) // показать итог жребия
    const [resultList, setResultList] = useState([]) // список/результат(все пользователи)
    const [winner, setWinner] = useState('') // победитель
    const [waitingUsers, setWaitingUsers] = useState(false)
    const [connecting, setConnecting] = useState(false)


    // сздание нового жребия
    const {activeUser} = useMenu()
    const {toggle} = useMenu()

    const newLot = async () => {
        const userName = localStorage.getItem('user')

        toggle()
        try {
            const response = await Axios.post(
                'https://geo-ker.firebaseio.com/lot/active.json', {activeUser, action: true})
            localStorage.setItem('activeLot', response.data.name)
            await Axios.patch(
                `https://geo-ker.firebaseio.com/lot/active/${response.data.name}/users.json`, {[userName]: activeUser})
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
                `https://geo-ker.firebaseio.com/lot/active/${itemDelete}/users.json`)
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
                    item.push(<li onClick={()=>transitionActiveLot(key)} key={key} className={'mt-3'}>{response.data[key].activeUser}</li>)
                }

            }
            setItemsActiveLot(item)
        } catch (e) {
            alert(e)
        }
    }

    // переход по ссылки Активные споры
    const transitionActiveLot = (key) => {
        toggle()
    }


    // генирация случайного числа
    const randomNumber = () => {
        let number = Math.ceil(Math.random() * 100)
        setUserNumber(number)
        setChance(prevState => prevState - 1)
    }

    // ОТПРАВКА результата на сервер// ожидание всех пользователей
    const saveRezolve = async () => {
        const item = localStorage.getItem('activeLot')

        try {
            await Axios.patch(
                `https://geo-ker.firebaseio.com/lot/active/${item}/result.json`,
                {[activeUser]: userNumber})
            setShowProcessing(false)
            setWaitingUsers(true)
            sortingListResult()

        } catch (e) {
            console.error(e)
        }
    }
    useEffect(() => {
        if (fetchUsers.length === resultList.length && resultList.length !== 0) {
            deleteActiveLot()
            setShowResult(true)
            setWaitingUsers(false)
        } else if (fetchUsers.length !== resultList.length) {
            setTimeout(() => sortingListResult(), 1000)
        }
    }, [resultList])

    useEffect(() => {
        if (chance === 0) {
            saveRezolve()
        }
    }, [chance])

    // удаление с сервера активного спора
    const deleteActiveLot = async () => {
        const deleteItem = localStorage.getItem('activeLot')
        if (deleteItem !== null) {
            try {
                await Axios.delete(`https://geo-ker.firebaseio.com/lot/active/${deleteItem}.json`)
                localStorage.removeItem('activeLot')
            } catch (e) {
                console.error(e)
            }
        }

    }

    // получение списка результата
    const sortingListResult = async () => {
        let arrSort = []
        let arr = []
        try {
            let url = localStorage.getItem('activeLot')
            const response = await Axios.get(`https://geo-ker.firebaseio.com/lot/active/${url}/result.json`)
            for (let key in response.data) {
                arr.push(response.data[key])
            }
            arr.sort((a, b) => {
                if (a < b) {
                    return 1;
                }
                if (a > b) {
                    return -1;
                }
                if (a = b) {
                    return 0;
                }
            })
            for (let i = 0; i < arr.length; i++) {
                for (let key in response.data) {
                    if (arr[i] === response.data[key]) {
                        arrSort.push(<li key={`${response.data} + ${key}`}>{`${key} - ${arr[i]}`}</li>)
                    }
                }
            }
            setResultList(arrSort)
            setWinner(arrSort[0].props.children)

        } catch (e) {
            console.error(e)
        }

    }

    // блокировка кнопки Выбросить число
    const disabledButton = () => {
        if (chance === 0) {
            return true
        } else return false
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
            showResult,
            saveRezolve,
            resultList,
            winner,
            waitingUsers
        }}

        >
            {children}
        </LotContext.Provider>
    );

};

