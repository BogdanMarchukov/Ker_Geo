import React, { Component } from 'react'
import { connect } from 'react-redux'
import classes from './Deviations.module.css'

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
        bottomDisabled: false,
        startTemplate: "",
        startAnchor: "",
        startUzer: "",
        startDate: "",
        startDisabled: false,
        concreteTemplate: "",
        concreteAnchor: "",
        concreteUzer: "",
        concreteDate: "",
        concreteDisabled: false

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
                    <input onChange={this.handlerBottomSupporting} placeholder="Опорный флянец" />
                    <input onChange={this.handlerBottomTemplate} placeholder="Шаблонный флянец" />
                    <input onChange={this.handlerBottomAnchor} placeholder="Анкер" />
                    <input onChange={this.handlerBottomUzer} placeholder="Исполнитель" />
                    <input onChange={this.handlerBottomDate} placeholder="Дата" />
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
                    <input onChange={this.state.handlerStartTemplate} placeholder="Шаблонный флянец" />
                    <input onChange={this.state.handlerStartAnchor} placeholder="Анкер" />
                    <input onChange={this.state.handlerStartUzer} placeholder="Исполнитель" />
                    <input onChange={this.state.handlerStartDate} placeholder="Дата" />
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
                    <input onChange={this.state.handlerConcreteTemplate} placeholder="Шаблонный флянец" />
                    <input onChange={this.state.handlerConcreteAnchor} placeholder="Анкер" />
                    <input onChange={this.state.handlerConcreteUzer} placeholder="Исполнитель" />
                    <input onChange={this.state.handlerConcreteDate} placeholder="Дата" />
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
   console.log(state)
    return{
        state
    }
}

function mapDispatchToProps(dispatch) {
    return {

    }
}

export default connect(mapStateToProps, mapDispatchToProps) (Deviations)
