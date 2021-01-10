import React from 'react';
import classes from "./ModelWindowAddField.module.css"
import {Button} from "react-bootstrap";
import {useAddFiled} from "../AddField/ContextAddFiled/ContextAddFiled";

const ModelWindowAddField = props => {
    const {showModelWindowAddFiled} = useAddFiled();
    const {openModelWindow} = useAddFiled();
    const {saveNameToState} = useAddFiled();
    const {saveDeltaToState} = useAddFiled();
    const {saveNameAndDeltaToBase} = useAddFiled();

    if (showModelWindowAddFiled === true) {
        return (
            <div className={classes.ModelWindowAddField}>
                <h6>Добавить строку расчета ?</h6>
                <input
                    onChange={event => saveNameToState(event.target.value)}
                    type='text'
                    placeholder='Название'
                />
                <input
                    onChange={event => saveDeltaToState(event.target.value)}
                    type='number'
                    placeholder='Дельта Н'
                    style={{
                        width: '100px',
                        marginLeft: '55px'
                    }}
                />
                <div className={classes.btn}>
                    <Button
                        onClick={saveNameAndDeltaToBase}
                        variant={'success'}
                    >
                        Сохранить
                    </Button>
                    <Button
                        onClick={()=>openModelWindow(props.offline)}
                        variant={'success'}
                    >
                        Отмена
                    </Button>
                </div>
            </div>
        );
    } else return null

};

export default ModelWindowAddField;