import React, {useContext, useState} from 'react';
import Axios from "axios";
import classes from "../AddField.module.css";

const AddFiledContext = React.createContext();

export const useAddFiled = () => useContext(AddFiledContext);


export const AddFiledProvider = ({children}) => {

    const [showModelWindowAddFiled, setShowModelWindowAddFiled] = useState(false) // Показать/спрятать окно создания нового поля
    const [name, setName] = useState(''); // название поля
    const [delta, setDelta] = useState(''); // занчение дэльты

// открытие/закрытие окна создания новой строки
    const openModelWindow = (offline = false) => {
        if (offline === false) {
            setShowModelWindowAddFiled((prevState => !prevState))
        }
        if (offline === true) {
            alert('Не доступно в режиме "offline"')
        }

    }


    // сохранение в state название поля
    const saveNameToState = value => {
        setName(value)
    }
    // сохранение в state дельта
    const saveDeltaToState = value => {
        setDelta(value)
    }

    // отправка в БД название и дельты
    const saveNameAndDeltaToBase = async () => {
        if (name !== '' && delta !== '') {
            openModelWindow();
            try {
                await Axios.post('https://geo-ker.firebaseio.com/options.json', {name, delta});
            } catch (e) {
                console.log(e)
            }
        } else return alert('Заполните необходимые поля')

    }

    // создание строки до первой инициализации
    const createField = h => {
        let item = h - -delta
        if (name !== '' && delta !== '') {
            return (
                <div className={classes.AddField}>
                    <p>
                        {name}
                        <strong>
                            {item.toFixed(4)}
                        </strong>
                    </p>
                </div>
            )
        } else return null

    }

    // удаление строки
    const deleteField = async (key, offline) => {
        if (offline === false) {
            try {
                await Axios.delete(`https://geo-ker.firebaseio.com/options/${key}.json`)
            } catch (e) {
                console.error(e)
            }
        }
        if (offline === true) {
            alert('Не доступно в режиме "offline"')
        }

    }


    return (
        <AddFiledContext.Provider
            value={{
                showModelWindowAddFiled,
                openModelWindow,
                saveNameToState,
                saveDeltaToState,
                saveNameAndDeltaToBase,
                createField,
                deleteField
            }}

        >
            {children}
        </AddFiledContext.Provider>
    );
}
