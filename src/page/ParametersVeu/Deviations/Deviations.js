import React, { Component } from 'react'
import { connect } from 'react-redux'
import classes from './Deviations.module.css'
import {
    ADD_BOTTOM_SUPPORTING, ADD_BOTTOM_TEMPLATE,
    ADD_BOTTOM_ANCHOR, ADD_BOTTOM_UZER,
    ADD_BOTTOM_DATE, ADD_START_TEMPLATE,
    ADD_START_ANCHOR, ADD_START_UZER,
    ADD_START_DATE, ADD_CONCRETE_TEMPLATE,
    ADD_CONCRETE_ANCHOR, ADD_CONCRETE_UZER,
    ADD_CONCRETE_DATE
} from '../../../store/actions/actionTypes'

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
        btnSave3: classes.none
        
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
                    <input onChange={(event)=>{
                        let a = event.target.value,
                        b = this.props.indexObject,
                        c = this.props.indexVeu;
                        this.props.handlerBottomSupporting(a, b, c)}} placeholder="Опорный флянец" />
                    <input onChange={(event)=>{
                        let a = event.target.value,
                        b = this.props.indexObject,
                        c = this.props.indexVeu;
                        this.props.handlerBottomTemplate(a, b, c)}} placeholder="Шаблонный флянец" />
                    <input onChange={(event)=>{
                        let a = event.target.value,
                        b = this.props.indexObject,
                        c = this.props.indexVeu;
                        this.props.handlerBottomAnchor(a, b, c)}} placeholder="Анкер" />
                    <input onChange={(event)=>{
                        let a = event.target.value,
                        b = this.props.indexObject,
                        c = this.props.indexVeu;
                        this.props.handlerBottomUzer(a, b, c)}} placeholder="Исполнитель" />
                    <input onChange={(event)=>{
                        let a = event.target.value,
                        b = this.props.indexObject,
                        c = this.props.indexVeu;
                        this.props.handlerBottomDate(a, b, c)}} placeholder="Дата" />
                </div>
                <button
                    className={this.state.btnSave}
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
                    <input onChange={(event)=>{
                        let a = event.target.value,
                        b = this.props.indexObject,
                        c = this.props.indexVeu;
                        this.props.handlerStartTemplate(a, b, c)}} placeholder="Шаблонный флянец" />
                    <input onChange={(event)=>{
                        let a = event.target.value,
                        b = this.props.indexObject,
                        c = this.props.indexVeu;
                        this.props.handlerStartAnchor(a, b, c)}} placeholder="Анкер" />
                    <input onChange={(event)=>{
                        let a = event.target.value,
                        b = this.props.indexObject,
                        c = this.props.indexVeu;
                        this.props.handlerStartUzer(a, b, c)}} placeholder="Исполнитель" />
                    <input onChange={(event)=>{
                        let a = event.target.value,
                        b = this.props.indexObject,
                        c = this.props.indexVeu;
                        this.props.handlerStartDate(a, b, c)}} placeholder="Дата" />
                </div>
                <button
                    className={this.state.btnSave2}
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
                    <input onChange={(event)=>{
                        let a = event.target.value,
                        b = this.props.indexObject,
                        c = this.props.indexVeu;
                        this.props.handlerConcreteTemplate(a, b, c)}} placeholder="Шаблонный флянец" />
                    <input onChange={(event)=>{
                        let a = event.target.value,
                        b = this.props.indexObject,
                        c = this.props.indexVeu;
                        this.props.handlerConcreteAnchor(a, b, c)}} placeholder="Анкер" />
                    <input onChange={(event)=>{
                        let a = event.target.value,
                        b = this.props.indexObject,
                        c = this.props.indexVeu;
                        this.props.handlerConcreteUzer(a, b, c)}} placeholder="Исполнитель" />
                    <input onChange={(event)=>{
                        let a = event.target.value,
                        b = this.props.indexObject,
                        c = this.props.indexVeu;
                        this.props.handlerConcreteDate(a, b, c)}} placeholder="Дата" />
                </div>
                <button
                    className={this.state.btnSave3}
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
    return{
        indexObject: state.imemVeu.activIndex,
        indexVeu: state.imemVeu.activIndexVeu
    }
}

function mapDispatchToProps(dispatch) {
    return {
        handlerBottomSupporting: (value, indexObject, indexVeu) => dispatch({
            type:  ADD_BOTTOM_SUPPORTING,
            value,
            indexObject,
            indexVeu
        }),
        handlerBottomTemplate: (value, indexObject, indexVeu) => dispatch({
            type:  ADD_BOTTOM_TEMPLATE,
            value,
            indexObject,
            indexVeu
        }),
        handlerBottomAnchor: (value, indexObject, indexVeu) => dispatch({
            type:  ADD_BOTTOM_ANCHOR,
            value,
            indexObject,
            indexVeu
        }),
        handlerBottomUzer: (value, indexObject, indexVeu) => dispatch({
            type:  ADD_BOTTOM_UZER,
            value,
            indexObject,
            indexVeu
        }),
        handlerBottomDate: (value, indexObject, indexVeu) => dispatch({
            type:  ADD_BOTTOM_DATE,
            value,
            indexObject,
            indexVeu
        }),

        handlerStartTemplate: (value, indexObject, indexVeu) => dispatch({
            type:  ADD_START_TEMPLATE,
            value,
            indexObject,
            indexVeu
        }),
        handlerStartAnchor: (value, indexObject, indexVeu) => dispatch({
            type:  ADD_START_ANCHOR,
            value,
            indexObject,
            indexVeu
        }),
        handlerStartUzer: (value, indexObject, indexVeu) => dispatch({
            type:  ADD_START_UZER,
            value,
            indexObject,
            indexVeu
        }),
        handlerStartDate: (value, indexObject, indexVeu) => dispatch({
            type:  ADD_START_DATE,
            value,
            indexObject,
            indexVeu
        }),

        handlerConcreteTemplate: (value, indexObject, indexVeu) => dispatch({
            type:  ADD_CONCRETE_TEMPLATE,
            value,
            indexObject,
            indexVeu
        }),
        handlerConcreteAnchor: (value, indexObject, indexVeu) => dispatch({
            type:  ADD_CONCRETE_ANCHOR,
            value,
            indexObject,
            indexVeu
        }),
        handlerConcreteUzer: (value, indexObject, indexVeu) => dispatch({
            type:  ADD_CONCRETE_UZER,
            value,
            indexObject,
            indexVeu
        }),
        handlerConcreteDate: (value, indexObject, indexVeu) => dispatch({
            type:  ADD_CONCRETE_DATE,
            value,
            indexObject,
            indexVeu
        })
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (Deviations)
