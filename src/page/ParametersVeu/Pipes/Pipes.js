import React, { Component } from 'react'
import { connect } from 'react-redux'
import classes from './Pipes.module.css'
import { SAVE_X_Y_H_TO_STORE } from '../../../store/actions/actionTypes'
import Axios from 'axios'

 class Pipes extends Component {

    state = {
        x: "",
        y:"",
        h:"",
        cls: classes.none,
        Btn1: "",
        btnToSaveBase: classes.none,
        btnSave: classes.none,
        disabled: true

    }
        // Фильтр ввода данных
    handlerInput = (event, item) => {
        this.setState ({
            [item]: event.target.value
        })
        if(this.state.h && this.state.x && this.state.y !== ""){
            this.setState ({
                disabled: false
            })
        }
    }

    /// Выводит данные XYH В таблицу из Store

    showContent = (indexVeu, indexObj, item) => {
        const XYH = ["XYH" + (indexVeu+1)]
        if( this.props.veu[indexObj].[XYH] !== undefined ) {
            return   (this.props.veu[indexObj].[XYH].[item])
        }
    }

    // Расчет отметок 

    paymentPipes = (indexVeu, indexObj, excess) => {
        const XYH = ["XYH" + (indexVeu+1)]
        if( this.props.veu[indexObj].[XYH] !== undefined ) {
            let i = Number(this.props.veu[indexObj].[XYH].h) - excess
            return i.toFixed(3)
        }
    }

    paymentAnchor = (indexVeu, indexObj, excess) => {
        const XYH = ["XYH" + (indexVeu+1)]
        if( this.props.veu[indexObj].[XYH] !== undefined ) {
            let i = Number(this.props.veu[indexObj].[XYH].h) + excess
            return i.toFixed(4)
        }
    }
        // сохранение в Б.Д.
    saveUpdatesObjectToBase = async activ => {
        const indx = activ.activIndex,
            key = activ.id[indx],
            seveItem = this.props.veu[indx]
        try {
            await Axios.patch(`https://geo-ker.firebaseio.com/veu/${key}.json`, seveItem)
           
        } catch (e) {
            alert(e)
        }
    }

    



    render() {

        return (
            <div className={classes.Pipes}>
                <h1>Отметки труб</h1>
                <div className={classes.stringTable}>
                    <p>
                        6-труб:
                        <strong>
                            {this.paymentPipes(this.props.activ.activIndexVeu, this.props.activ.activIndex, 3.169 ) }
                        </strong>
                    </p>
                </div>
                <div className={classes.stringTable}>
                    <p>
                        160-ая:
                        <strong>
                            {this.paymentPipes(this.props.activ.activIndexVeu, this.props.activ.activIndex, 3.24 ) }
                        </strong>
                    </p>
                </div>
                <div className={classes.stringTable}>
                    <p>
                        200-ая:
                        <strong>
                            {this.paymentPipes(this.props.activ.activIndexVeu, this.props.activ.activIndex, 3.8 ) }
                        </strong>
                    </p>
                </div>
                <h1>Параметры ВЭУ</h1>
                <div className={classes.stringTable}>
                    <p>
                        X: 
                        <strong>
                            {this.showContent(this.props.activ.activIndexVeu, this.props.activ.activIndex, "x")}
                        </strong>
                    </p>
                </div>
                <div className={classes.stringTable}>
                    <p>
                        Y:
                        <strong>
                            {this.showContent(this.props.activ.activIndexVeu, this.props.activ.activIndex, "y")}
                        </strong>
                    </p>
                </div>
                <div className={classes.stringTable}>
                    <p>
                        H:
                        <strong>
                            {this.showContent(this.props.activ.activIndexVeu, this.props.activ.activIndex, "h")}
                        </strong>
                    </p>
                </div>
                <div className={classes.stringTable}>
                    <p>
                        Опорный флянец:
                        <strong>
                            {this.paymentPipes(this.props.activ.activIndexVeu, this.props.activ.activIndex, 2.65 ) }
                        </strong>
                    </p>
                </div>
                <div className={classes.stringTable}>
                    <p>
                        Шаблонный флянец:
                        <strong>
                            {this.showContent(this.props.activ.activIndexVeu, this.props.activ.activIndex, "h")}
                        </strong>
                    </p>
                </div>
                <div className={classes.stringTable}>
                    <p>
                        Анкер:
                        <strong>
                            {this.paymentAnchor(this.props.activ.activIndexVeu, this.props.activ.activIndex, 0.21 ) }
                        </strong>
                    </p>
                </div>
                <div className={this.state.cls}>
                    <input type="number" onChange={(event)=> this.handlerInput(event, ["x"])} placeholder="X" />
                    <input type="number" onChange={(event)=> this.handlerInput(event, ["y"])} placeholder="Y" />
                    <input type="number" onChange={(event)=> this.handlerInput(event, ["h"])} placeholder="H" />
                </div>
                <button
                    className={this.state.Btn1}
                    onClick = {()=>{
                        this.setState({
                             cls: classes.show,
                             Btn1: classes.none,
                             btnSave: ""
                        })
                    }}
                >
                    Вписать
                </button>
                <button
                    className={this.state.btnToSaveBase}  
                    onClick={ () =>{ 
                        this.setState({
                            cls: classes.none
                        })
                        this.saveUpdatesObjectToBase(this.props.activ)
                }} 
                                
                >   
                    Записать!!!
                </button>
                <button
                    onClick = {()=>{
                        this.setState({
                            cls: classes.none,
                            Btn1: classes.none,
                            btnSave: classes.none,
                            btnToSaveBase: classes.btnToSaveBase
                        })
                        this.props.parametrsToStore(this.props.activ, this.state)
                    }}
                    disabled={this.state.disabled}
                    className={this.state.btnSave}
                   
                >
                    Сохранить
                </button>
            </div>
        );
    }
}

function mapStateToProps(state) {

    return{
        activ: state.imemVeu,
        veu: state.veu.veu
    }
}

function mapDispatchToProps(dispatch) {
    return {
        parametrsToStore: (activ, info) => dispatch ({type: SAVE_X_Y_H_TO_STORE, activ, info})
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (Pipes)

