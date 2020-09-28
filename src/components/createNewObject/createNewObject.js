import React, { Component } from 'react'
import { connect } from 'react-redux'
import classes from './CreateNewObject.module.css'

 class CreateNewObject extends Component {
  
    createHandler = () => {
        
    }

    censelHandler = () => {
        console.log("tect2")
    }

    submitHandler = event => {
        event.preventDefault()
    }

    HandlerNameObject = event => {
        let name = event.target.value
        console.log(name)
    }

    HandlerTotall = (event, props) => {
        let namber = event.target.value
        console.log(namber)
        console.log(this.props.veu)
    }

    
    render() {
        
        return (
            <div className={classes.CreateNewObject}>
                <h1>Создание объекта</h1>
                <form onSubmit={this.submitHandler}>
                    <input 
                        type = "text"
                        placeholder = "Название объекта"
                        onChange={this.HandlerNameObject}
                    />
                   <br/>
                    <input 
                        type = "number"
                        placeholder = "Колличество ВЭУ"
                        onChange={this.HandlerTotall}
                    />
                    <div style={{marginTop: 15}}>
                        <button 
                            className={classes.create}
                            onClick={this.createHandler}
                        >
                            Создать
                        </button>
                        <button
                            className={classes.censel}
                            onClick={this.censelHandler}
                        >
                            Отмена
                        </button>
                    </div>
                </form>
            </div>
        )
    }
}

function mapSatteToProps(state){
    return {veu:state.veu}
}

export default connect(mapSatteToProps) (CreateNewObject)