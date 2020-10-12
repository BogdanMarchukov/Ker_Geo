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

    // Отображает данные из stora в таблицу Корзина низ

    showBottomSupporting = (nV, nObj) => {
        const namberVeu = ["nV" + (nV +1)]
        if (this.props.veu.veu[nObj].[namberVeu] !== undefined) {
           return (this.props.veu.veu[nObj].[namberVeu].oF)
        }
    }

    showBottomTemplate = (nV, nObj) => {
        const namberVeu = ["nV" + (nV +1)]
        if (this.props.veu.veu[nObj].[namberVeu] !== undefined) {
           return (this.props.veu.veu[nObj].[namberVeu].shF)
        }
    }

    showBottomAnchor = (nV, nObj) => {
        const namberVeu = ["nV" + (nV +1)]
        if (this.props.veu.veu[nObj].[namberVeu] !== undefined) {
           return (this.props.veu.veu[nObj].[namberVeu].anchor)
        }
    }

    showBottomUzer = (nV, nObj) => {
        const namberVeu = ["nV" + (nV +1)]
        if (this.props.veu.veu[nObj].[namberVeu] !== undefined) {
           return (this.props.veu.veu[nObj].[namberVeu].uzer)
        }
    }

    showBottomDate = (nV, nObj) => {
        const namberVeu = ["nV" + (nV +1)]
        if (this.props.veu.veu[nObj].[namberVeu] !== undefined) {
           return (this.props.veu.veu[nObj].[namberVeu].date)
           
        }
    }
    showStartTemplate = (nV, nObj) => {
        const namberVeu = ["sV" + (nV +1)]
        if (this.props.veu.veu[nObj].[namberVeu] !== undefined) {
           return (this.props.veu.veu[nObj].[namberVeu].shF)
        }
    }

    showStartAnchor = (nV, nObj) => {
        const namberVeu = ["sV" + (nV +1)]
        if (this.props.veu.veu[nObj].[namberVeu] !== undefined) {
           return (this.props.veu.veu[nObj].[namberVeu].anchor)
        }
    }

    showStartUzer = (nV, nObj) => {
        const namberVeu = ["sV" + (nV +1)]
        if (this.props.veu.veu[nObj].[namberVeu] !== undefined) {
           return (this.props.veu.veu[nObj].[namberVeu].uzer)
        }
    }

    showStartDate = (nV, nObj) => {
        const namberVeu = ["sV" + (nV +1)]
        if (this.props.veu.veu[nObj].[namberVeu] !== undefined) {
           return (this.props.veu.veu[nObj].[namberVeu].date)
           
        }
    }

    showConcreteTemplate = (nV, nObj) => {
        const namberVeu = ["finV" + (nV +1)]
        if (this.props.veu.veu[nObj].[namberVeu] !== undefined) {
           return (this.props.veu.veu[nObj].[namberVeu].shF)
        }
    }

    showConcreteAnchor = (nV, nObj) => {
        const namberVeu = ["finV" + (nV +1)]
        if (this.props.veu.veu[nObj].[namberVeu] !== undefined) {
           return (this.props.veu.veu[nObj].[namberVeu].anchor)
        }
    }

    showConcreteUzer = (nV, nObj) => {
        const namberVeu = ["finV" + (nV +1)]
        if (this.props.veu.veu[nObj].[namberVeu] !== undefined) {
           return (this.props.veu.veu[nObj].[namberVeu].uzer)
        }
    }

    showConcreteDate = (nV, nObj) => {
        const namberVeu = ["finV" + (nV +1)]
        if (this.props.veu.veu[nObj].[namberVeu] !== undefined) {
           return (this.props.veu.veu[nObj].[namberVeu].date)
           
        }
    }
            //// Защита данных таблицы от перезаписи
    noRecordingBottom = (nV, nObj) => {
        const namberVeu = ["nV" + (nV +1)]
        if (this.props.veu.veu[nObj].[namberVeu] !== undefined){
            return true
        }else return false
        
    }

    noRecordingStart = (nV, nObj) => {
        const namberVeu = ["sV" + (nV +1)]
        if (this.props.veu.veu[nObj].[namberVeu] !== undefined){
            return true
        }else return false
        
    }

    noRecordingConcrete = (nV, nObj) => {
        const namberVeu = ["finV" + (nV +1)]
        if (this.props.veu.veu[nObj].[namberVeu] !== undefined){
            return true
        }else return false
        
    }
    
    

    render() {
      
      
        return (
            <div className={classes.Deviations}>
                <h1>Корзина(Низ)</h1>
                <div className={classes.stringTable}>
                    <p>
                        Опорный флянец: 
                        <strong>
                            {this.showBottomSupporting(this.props.activ.activIndexVeu, this.props.activ.activIndex)}
                        </strong>
                    </p>
                </div>
                <div className={classes.stringTable}>
                    <p>
                        Шаблонный флянец:
                        <strong>
                            {this.showBottomTemplate(this.props.activ.activIndexVeu, this.props.activ.activIndex)}
                        </strong>
                    </p>
                </div>
                <div className={classes.stringTable}>
                    <p>
                        Анкер:
                        <strong>
                            {this.showBottomAnchor(this.props.activ.activIndexVeu, this.props.activ.activIndex)}
                        </strong>
                    </p>
                </div>
                <div className={classes.stringTable}>
                    <p>
                        Исполнитель:
                        <strong>
                            {this.showBottomUzer(this.props.activ.activIndexVeu, this.props.activ.activIndex)}
                        </strong>
                    </p>
                </div>
                <div className={classes.stringTable}>
                    <p>
                        Дата:
                        <strong>
                            {this.showBottomDate(this.props.activ.activIndexVeu, this.props.activ.activIndex)}
                        </strong>
                    </p>
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
                    disabled= {this.noRecordingBottom(this.props.activ.activIndexVeu, this.props.activ.activIndex)}
                >
                    Вписать
                </button>
                <h1>До Бетона</h1>
                <div className={classes.stringTable}>
                    <p>
                        Шаблонный флянец:
                        <strong>
                            {this.showStartTemplate(this.props.activ.activIndexVeu, this.props.activ.activIndex)}
                        </strong>
                    </p>
                </div>
                <div className={classes.stringTable}>
                    <p>
                        Анкер:
                        <strong>
                            {this.showStartAnchor(this.props.activ.activIndexVeu, this.props.activ.activIndex)}
                        </strong>
                    </p>
                </div>
                <div className={classes.stringTable}>
                    <p>
                        Исполнитель:
                        <strong>
                            {this.showStartUzer(this.props.activ.activIndexVeu, this.props.activ.activIndex)}
                        </strong>
                    </p>
                </div>
                <div className={classes.stringTable}>
                    <p>
                        Дата:
                        <strong>
                            {this.showStartDate(this.props.activ.activIndexVeu, this.props.activ.activIndex)}
                        </strong>
                    </p>
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
                    disabled= {this.noRecordingStart(this.props.activ.activIndexVeu, this.props.activ.activIndex)}
                >
                    Вписать
                </button>
                <h1>Бетонирование</h1>
                <div className={classes.stringTable}>
                    <p>
                        Шаблонный флянец:
                        <strong>
                            {this.showConcreteTemplate(this.props.activ.activIndexVeu, this.props.activ.activIndex)}
                        </strong>
                    </p>
                </div>
                <div className={classes.stringTable}>
                    <p>
                        Анкер:
                        <strong>
                            {this.showConcreteAnchor(this.props.activ.activIndexVeu, this.props.activ.activIndex)}
                        </strong>
                    </p>
                </div>
                <div className={classes.stringTable}>
                    <p>
                        Исполнитель:
                        <strong>
                            {this.showConcreteUzer(this.props.activ.activIndexVeu, this.props.activ.activIndex)}
                        </strong>
                    
                    </p>
                </div>
                <div className={classes.stringTable}>
                    <p>
                        Дата:
                        <strong>
                            {this.showConcreteDate(this.props.activ.activIndexVeu, this.props.activ.activIndex)}
                        </strong>
                    </p>
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
                    disabled= {this.noRecordingConcrete(this.props.activ.activIndexVeu, this.props.activ.activIndex)}
                >
                    Вписать
                </button>

            </div>
        );
    }
}

function mapStateToProps(state) {
            
    return {
        activ: state.imemVeu,
        veu: state.veu

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
