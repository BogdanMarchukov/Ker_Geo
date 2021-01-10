import React, {Component} from 'react'
import {connect} from 'react-redux'
import classes from './Pipes.module.css'
import {SAVE_X_Y_H_TO_STORE} from '../../../store/actions/actionTypes'
import {saveUpdatesObjectToBase} from '../../../store/actions/pipes'
import LoaderSave from '../../../components/LoaderSave/LoaderSave'
import ButtonToHome from "../../../components/ButtonToHome/ButtonToHome";
import AddField from "./AddField/AddField";
import ModelWindowAddField from "./ModelWindowAddField/ModelWindowAddField";
import {AddFiledProvider} from "./AddField/ContextAddFiled/ContextAddFiled";

class Pipes extends Component {

    state = {
        x: "",
        y: "",
        h: "",
        cls: classes.none,
        Btn1: "",
        btnToSaveBase: classes.none,
        btnSave: classes.none,
        disabled: true

    }
    // Фильтр ввода данных
    handlerInput = (event, item) => {
        this.setState({
            [item]: event.target.value
        })
        if (this.state.h && this.state.x && this.state.y !== "") {
            this.setState({
                disabled: false
            })
        }
    }

    /// Выводит данные XYH В таблицу из Store

    showContent = (indexVeu, indexObj, item) => {
        const XYH = ["XYH" + (indexVeu + 1)]
        if (this.props.veu[indexObj][XYH] !== undefined) {
            return (this.props.veu[indexObj][XYH][item])
        }
    }

    // Расчет отметок 

    paymentPipes = (indexVeu, indexObj, excess) => {
        const XYH = ["XYH" + (indexVeu + 1)]
        if (this.props.veu[indexObj][XYH] !== undefined) {
            let i = Number(this.props.veu[indexObj][XYH].h) - excess
            return i.toFixed(3)
        }
    }

    paymentAnchor = (indexVeu, indexObj, excess) => {
        const XYH = ["XYH" + (indexVeu + 1)]
        if (this.props.veu[indexObj][XYH] !== undefined) {
            let i = Number(this.props.veu[indexObj][XYH].h) + excess
            return i.toFixed(4)
        }
    }

    // защита от перезаписи

    noRecordingXYH = (nV, nObj) => {
        const namberVeu = ["XYH" + (nV + 1)]
        if (this.props.veu[nObj][namberVeu] !== undefined || this.props.offline === true) {
            return true
        } else return false

    }


    render() {
        return (
            <div className={classes.Pipes}>
                <h1>Отметки труб</h1>
                <div className={classes.stringTable}>
                    <p>
                        6-труб:
                        <strong>
                            {this.paymentPipes(this.props.activ.activIndexVeu, this.props.activ.activIndex, 3.169)}
                        </strong>
                    </p>
                </div>
                <div className={classes.stringTable}>
                    <p>
                        160-ая:
                        <strong>
                            {this.paymentPipes(this.props.activ.activIndexVeu, this.props.activ.activIndex, 3.24)}
                        </strong>
                    </p>
                </div>
                <div className={classes.stringTable}>
                    <p>
                        200-ая:
                        <strong>
                            {this.paymentPipes(this.props.activ.activIndexVeu, this.props.activ.activIndex, 3.8)}
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
                        Опорный фланец:
                        <strong>
                            {this.paymentPipes(this.props.activ.activIndexVeu, this.props.activ.activIndex, 2.65)}
                        </strong>
                    </p>
                </div>
                <div className={classes.stringTable}>
                    <p>
                        Шаблонный фланец:
                        <strong>
                            {this.showContent(this.props.activ.activIndexVeu, this.props.activ.activIndex, "h")}
                        </strong>
                    </p>
                </div>
                <div className={classes.stringTable}>
                    <p>
                        Анкер:
                        <strong>
                            {this.paymentAnchor(this.props.activ.activIndexVeu, this.props.activ.activIndex, 0.21)}
                        </strong>
                    </p>
                </div>
                <div className={this.state.cls}>
                    <input type="number" onChange={(event) => this.handlerInput(event, ["x"])} placeholder="X"/>
                    <input type="number" onChange={(event) => this.handlerInput(event, ["y"])} placeholder="Y"/>
                    <input type="number" onChange={(event) => this.handlerInput(event, ["h"])} placeholder="H"/>
                </div>
                <>
                    <AddFiledProvider>
                        <AddField
                            list={this.props.filedList}
                            itemH={this.showContent(this.props.activ.activIndexVeu, this.props.activ.activIndex, "h")}
                            offline = {this.props.offline}
                        />
                        <ModelWindowAddField offline = {this.props.offline} />
                    </AddFiledProvider>

                </>
                <button
                    className={this.state.Btn1}
                    disabled={this.noRecordingXYH(this.props.activ.activIndexVeu, this.props.activ.activIndex)}
                    onClick={() => {
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
                    onClick={() => {
                        this.setState({
                            cls: classes.none,
                            btnToSaveBase: classes.none
                        })
                        this.props.saveUpdatesObjectToBase(
                            this.props.activ, this.props.veu[this.props.activ.activIndex]
                        )
                    }}

                >
                    Записать!!!
                </button>

                <button
                    onClick={() => {
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
                {

                    this.props.startLoadXYH === true
                        ? <LoaderSave startLoad={this.props.startLoad}/>
                        : null
                }
                <div className={classes.buttonHome}>
                    <ButtonToHome/>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        activ: state.imemVeu,
        veu: state.veu.veu,
        startLoadXYH: state.cls.startLoadXYH,
        startLoad: state.cls.startLoad,
        offline: state.cls.offline,
        filedList: state.veu.filedList
    }
}

function mapDispatchToProps(dispatch) {
    return {
        parametrsToStore: (activ, info) => dispatch({type: SAVE_X_Y_H_TO_STORE, activ, info}),
        saveUpdatesObjectToBase: (activ, info) => dispatch(saveUpdatesObjectToBase(activ, info))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Pipes)

