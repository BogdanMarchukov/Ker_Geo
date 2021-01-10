import React from 'react';
import classes from "./AddField.module.css"
import {useAddFiled} from "./ContextAddFiled/ContextAddFiled";
import {NavLink} from "react-router-dom";

const AddField = (props) => {
    const {openModelWindow} = useAddFiled();
    const {createField} = useAddFiled();
    const {deleteField} = useAddFiled();

    const showListItem = (h, deltaObj) => {
        let result = [];


        Object.keys(deltaObj).forEach(key => {
            let item = h - -deltaObj[key].delta
            result.push(
                <div className={classes.AddField}>
                    <NavLink to='/'>
                        <i

                            key={key}
                            onClick={() => deleteField(key, props.offline)}
                            className="far fa-trash-alt"
                        />
                    </NavLink>
                    <p>
                        {deltaObj[key].name}
                        <strong>
                            {item.toFixed(4)}
                        </strong>
                    </p>
                </div>
            )
        })
        return result
    }

    return (
        <>
            {showListItem(props.itemH, props.list)}
            {createField(props.itemH)}

            <i
                onClick={()=> openModelWindow(props.offline)}
                style={{
                    fontSize: '30px',
                    margin: '5px 150px 0 ',
                    cursor: 'pointer'
                }} className="far fa-plus-square"/>
        </>
    );

};

export default AddField;