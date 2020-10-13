import React, { Component } from 'react'
import { connect } from 'react-redux'
import classes from './CreateNewObject.module.css'
import {  CLOSE_WINDOW } from '../../store/actions/actionTypes'
import { addNewObject } from '../../store/actions/createNewObject'
import Axios from 'axios'


class CreateNewObject extends Component {

    state = {
        name: "",
        namber: 0,
        disabled: true,
        id: 0

    }


    submitHandler = (event) => {
        event.preventDefault()
        this.props.closeWindow()
    }

    HandlerNameObject = event => {
        this.setState(
            { name: event.target.value, id: Math.random() }
        )

    }

    HandlerTotall = event => {
        this.setState(
            { namber: event.target.value }

        )
        if (this.state.name.length > 3 && event.target.value > 0 && event.target.value < 120) {
            this.setState(
                { disabled: false }

            )
        } else this.setState(
            { disabled: true }

        )

    }

    onSave = async state => {
        try {
            const response = await Axios.post('https://geo-ker.firebaseio.com/veu.json', state)
            console.log(response.data)
        } catch (e) {
            console.log(e)
        }
        
    }



    render() {
        return (
            
            <div className = {this.props.none}>
                <div className={classes.CreateNewObject}>
                    <h1>Создание объекта</h1>
                    <form onSubmit={this.submitHandler}>
                        <input
                            type="text"
                            placeholder="Название объекта"
                            onChange={this.HandlerNameObject}
                        />
                        <br />
                        <input
                            type="number"
                            placeholder="Колличество ВЭУ"
                            onChange={this.HandlerTotall}

                        />
                        <div style={{ marginTop: 15 }}>
                            <button
                                className={classes.create}
                                onClick={ () => { 
                                
                                    this.props.onName(this.state, this.onSave(this.state)) 
                                }}
                                disabled={this.state.disabled}
                               
                            >
                                Создать
                        </button>
                            <button
                                onClick={this.props.closeWindow}
                                className={classes.censel}
                            
                            >
                                Отмена
                        </button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    
    return {
        none: state.cls.none,
        state: state
    }
}


function mapDispatchToProps(dispatch) {
    return {
        onName: info => dispatch(addNewObject(info)),
        closeWindow: () => dispatch({type: CLOSE_WINDOW})
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(CreateNewObject)