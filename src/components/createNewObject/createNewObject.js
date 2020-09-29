import React, { Component } from 'react'
import { connect } from 'react-redux'
import classes from './CreateNewObject.module.css'
import { CREATE_NEW_OBJECT } from '../../store/actions/actionTypes'

class CreateNewObject extends Component {

    state = {
        name: "",
        namber: 0,
        disabled: true,
        cls: classes.background

    }


    createHandler = () => {
        console.log('test')
    }

    censelHandler = () => {
        console.log("tect2")
    }

    submitHandler = (event) => {
        event.preventDefault()
        this.setState(
            {cls:classes.none}
        )
    }

    HandlerNameObject = event => {
        this.setState(
            { name: event.target.value }
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



    render() {
       
        
        

        return (
            <div className = {this.state.cls}>
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
                                    this.props.onName(this.state) 
                                }}
                                disabled={this.state.disabled}
                               
                            >
                                Создать
                        </button>
                            <button
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

function mapDispatchToProps(dispatch) {
    return {
        onName: info => dispatch({ type: CREATE_NEW_OBJECT, info })
    }

}

export default connect(null, mapDispatchToProps)(CreateNewObject)