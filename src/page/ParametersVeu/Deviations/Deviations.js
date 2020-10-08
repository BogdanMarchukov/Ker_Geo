import React, { Component } from 'react'
import { connect } from 'react-redux'
import classes from './Deviations.module.css'
import {SAVE_TO_STORE_BOTTOM, SAVE_TO_STORE_START, SAVE_TO_STORE_CONCRETE} from '../../../store/actions/actionTypes'

class Deviations extends Component {

    state = {
        cls1: classes.none,
        btnWrite1: "",
        btnSave: classes.none,
        cls2: classes.none,
        btnWrite2: "",
        btnSave2: classes.none,
        cls3: classes.none,
        btnWrite3: "",
        btnSave3: classes.none,
        bottomSupporting: "",
        bottomTemplate: "",
        bottomAnchor: "",
        bottomUzer: "",
        bottomDate: "",
        bottomDisabled: true,
        startTemplate: "",
        startAnchor: "",
        startUzer: "",
        startDate: "",
        startDisabled: true,
        concreteTemplate: "",
        concreteAnchor: "",
        concreteUzer: "",
        concreteDate: "",
        concreteDisabled: true

    }

    showInputBottom = () => {
        this.setState(
            {
                cls1: classes.inputClass,
                btnWrite1: classes.none,
                btnSave: ""

            }
        )
    }

    showInputBottom2 = () => {
        this.setState(
            {
                cls2: classes.inputClass,
                btnWrite2: classes.none,
                btnSave2: ""

            }
        )
    }

    showInputBottom3 = () => {
        this.setState(
            {
                cls3: classes.inputClass,
                btnWrite3: classes.none,
                btnSave3: ""

            }
        )
    }

    saveBottomControl = () => {
        if (
            this.state.bottomSupporting !== "" &&
            this.state.bottomTemplate !== "" &&
            this.state.bottomAnchor !== "" &&
            this.state.bottomUzer !== "" &&
            this.state.bottomDate !== ""
        ) {
            this.setState(
                {
                    bottomDisabled: false
                }

            )
        }else {
            this.setState({
                bottomDisabled: true
            })
        }
    }

    

    saveStartControl = () => {
        if (
            this.state.startTemplate !== "" &&
            this.state.startAnchor !== "" &&
            this.state.startUzer !== "" &&
            this.state.startDate !== ""
        ) {
            this.setState(
                {
                    startDisabled: false
                }

            )
        }else {
            this.setState({
                startDisabled: true
            })
        }
    }

    saveConcreteControl = () => {
        if (
            this.state.concreteSupporting !== "" &&
            this.state.concreteTemplate !== "" &&
            this.state.concreteAnchor !== "" &&
            this.state.concreteUzer !== "" &&
            this.state.concreteDate !== ""
        ) {
            this.setState(
                {
                    concreteDisabled: false
                }

            )
        }else {
            this.setState({
                concreteDisabled: true
            })
        }
    }



    handlerBottomSupporting = event => {

        this.setState(
            {
                bottomSupporting: event.target.value
            }
        )
        this.saveBottomControl()
    }

    handlerBottomTemplate = event => {
        this.setState(
            {
                bottomTemplate: event.target.value
            }
        )
        this.saveBottomControl()
    }

    handlerBottomAnchor = event => {
        this.setState(
            {
                bottomAnchor: event.target.value
            }
        )
        this.saveBottomControl()
    }
   

    handlerBottomUzer = event => {
        this.setState(
            {
                bottomUzer: event.target.value
            }
        )
        this.saveBottomControl()
    }

    handlerBottomDate = event => {
        this.setState(
            {
                bottomDate: event.target.value
            }
        )
        this.saveBottomControl()
    }

    handlerStartTemplate = event => {
        this.setState(
            {
                startTemplate: event.target.value
            }
        )
        this.saveStartControl()
    }

    handlerStartAnchor = event => {
        this.setState(
            {
                startAnchor: event.target.value
            }
        )
        this.saveStartControl()
    }

    handlerStartUzer = event => {
        this.setState(
            {
                startUzer: event.target.value
            }
        )
        this.saveStartControl()
    }

    handlerStartDate = event => {
        this.setState(
            {
                startDate: event.target.value
            }
        )
        this.saveStartControl()
    }

    handlerConcreteTemplate = event => {
        this.setState(
            {
                concreteTemplate: event.target.value
            }
        )
        this.saveConcreteControl()
    }

    handlerConcreteAnchor = event => {
        this.setState(
            {
                concreteAnchor: event.target.value
            }
        )
        this.saveConcreteControl()
    }

    handlerConcreteUzer = event => {
        this.setState(
            {
                concreteUzer: event.target.value
            }
        )
        this.saveConcreteControl()
    }

    handlerConcreteDate = event => {
        this.setState(
            {
                concreteDate: event.target.value
            }
        )
        this.saveConcreteControl()
    }



    render() {
       
        return (
            <div className={classes.Deviations}>
                <h1>Корзина(Низ)</h1>
                <div className={classes.stringTable}>
                    <p>Опорный флянец:</p>
                </div>
                <div className={classes.stringTable}>
                    <p>Шаблонный флянец:</p>
                </div>
                <div className={classes.stringTable}>
                    <p>Анкер:</p>
                </div>
                <div className={classes.stringTable}>
                    <p>Исполнитель:</p>
                </div>
                <div className={classes.stringTable}>
                    <p>Дата:</p>
                </div>
                <div className={this.state.cls1}>
                    <input onChange={this.handlerBottomSupporting} placeholder="Опорный флянец" />
                    <input onChange={this.handlerBottomTemplate} placeholder="Шаблонный флянец" />
                    <input onChange={this.handlerBottomAnchor} placeholder="Анкер" />
                    <input onChange={this.handlerBottomUzer} placeholder="Исполнитель" />
                    <input onChange={this.handlerBottomDate} placeholder="Дата" />
                </div>
                <button
                    className={this.state.btnSave}
                    disabled={this.state.bottomDisabled}
                    onClick = {()=>{
                        this.props.saveToStoreBottom(this.props.activ, this.state)
                    }}
                >
                    Сохранить
                </button>
                <button
                    onClick={this.showInputBottom}
                    className={this.state.btnWrite1}
                >
                    Вписать
                </button>
                <h1>До Бетона</h1>
                <div className={classes.stringTable}>
                    <p>Шаблонный флянец:</p>
                </div>
                <div className={classes.stringTable}>
                    <p>Анкер:</p>
                </div>
                <div className={classes.stringTable}>
                    <p>Исполнитель:</p>
                </div>
                <div className={classes.stringTable}>
                    <p>Дата:</p>
                </div>

                <div className={this.state.cls2}>
                    <input onChange={this.handlerStartTemplate} placeholder="Шаблонный флянец" />
                    <input onChange={this.handlerStartAnchor} placeholder="Анкер" />
                    <input onChange={this.handlerStartUzer} placeholder="Исполнитель" />
                    <input onChange={this.handlerStartDate} placeholder="Дата" />
                </div>
                <button
                    className={this.state.btnSave2}
                    disabled={this.state.startDisabled}
                    onClick = {()=>{
                        this.props.saveToStoreStart(this.props.activ, this.state)
                    }}
                >
                    Сохранить
                </button>
                <button
                    onClick={this.showInputBottom2}
                    className={this.state.btnWrite2}
                >
                    Вписать
                </button>
                <h1>Бетонирование</h1>
                <div className={classes.stringTable}>
                    <p>Шаблонный флянец:</p>
                </div>
                <div className={classes.stringTable}>
                    <p>Анкер:</p>
                </div>
                <div className={classes.stringTable}>
                    <p>Исполнитель:</p>
                </div>
                <div className={classes.stringTable}>
                    <p>Дата:</p>
                </div>
                <div className={this.state.cls3}>
                    <input onChange={this.handlerConcreteTemplate} placeholder="Шаблонный флянец" />
                    <input onChange={this.handlerConcreteAnchor} placeholder="Анкер" />
                    <input onChange={this.handlerConcreteUzer} placeholder="Исполнитель" />
                    <input onChange={this.handlerConcreteDate} placeholder="Дата" />
                </div>
                <button
                    className={this.state.btnSave3}
                    disabled={this.state.concreteDisabled}
                    onClick = {()=>{
                        this.props.saveToStoreConcrete(this.props.activ, this.state)
                    }}
                >
                    Сохранить
                </button>
                <button
                    onClick={this.showInputBottom3}
                    className={this.state.btnWrite3}
                >
                    Вписать
                </button>

            </div>
        );
    }
}

function mapStateToProps(state) {
    console.log(state)
    // let b = 1
    // let a = "veuBottom"+[b] 
    
    // let nameObjc = state.veu.[state.imemVeu.name];
    // if(nameObjc !== undefined) {
    //     console.log(nameObjc[a])
    // }
        // console.log(state.imemVeu.name)
        
    return {
        activ: state.imemVeu
    }
}

function mapDispatchToProps(dispatch) {
    return {
        saveToStoreBottom: (activ, infoVeu) => dispatch({type: SAVE_TO_STORE_BOTTOM, activ, infoVeu}),
        saveToStoreStart: (activ, infoVeu) => dispatch({type: SAVE_TO_STORE_START, activ, infoVeu}),
        saveToStoreConcrete: (activ, infoVeu) => dispatch({type: SAVE_TO_STORE_CONCRETE, activ, infoVeu})

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Deviations)
