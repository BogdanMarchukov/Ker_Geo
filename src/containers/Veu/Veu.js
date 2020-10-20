import React, { Component } from 'react'
import classes from './Veu.module.css'
import ObjectButton from '../../components/objectButton/ObjectButton'
import { connect } from 'react-redux'
import CreateNewObject from '../../components/CreateNewObject/CreateNewObject'
import { CALL_MODEL_WINDOW, KEY_BASE_TO_STORE, BTN_OBJECT_DISABLED_OF} from '../../store/actions/actionTypes'
import Loader from '../../components/Loader/Loader'
import{initState} from '../../store/actions/initState'



class Veu extends Component {

    state = {
        cls: classes.modal,
        passwordCls: classes.password,
        password: '1987',
        passwordUser: "",
        h1: "Введите пароль"

    }




    componentDidMount() {
        this.props.initState()
    }

    inputHandler = (event) => {
        this.setState({
            passwordUser: event.target.value
        })
    
}

passwordHandler = () =>{
    if (this.state.passwordUser === this.state.password) {
        this.props.btnObjectDisabledOf()
        this.setState({
            passwordCls: classes.none
        })
    } else {
        this.setState({
            h1: "Не верный пароль"
        })
    }
}




    render() {
        return (
            <div className={classes.Veu}>
                <h1>Выберите объект или создайте новый</h1>
                <button
                    className={this.props.btn_veu}
                    onClick={this.props.omWindowModal}
                >
                    +
                 </button>
                <div className={classes.objectList}>
                    {
                        this.props.loading
                            ?
                            <Loader />
                            : this.props.veu.map((newVeu, index) => {
                                return (

                                    <ObjectButton
                                        name={newVeu.name}
                                        key={index}
                                        namber={newVeu.namber}
                                        index={index}
                                    />

                                )
                            })

                    }

                </div>
                <div className={this.state.passwordCls}>
                    <p>V.1.0.2</p>
                    <div className={classes.FormPassword}>
                        <h1>{this.state.h1}</h1>
                        <input onChange={this.inputHandler}/>
                        <button onClick={this.passwordHandler}>Отправить</button>
                    </div>
                </div>

                <div className={this.state.cls}>
                    <CreateNewObject
                    />
                </div>

            </div>
        )
    }
}

function mapSatteToProps(state) {
    return {
        veu: state.veu.veu,
        btn_veu: state.cls.btn,
        loading: state.veu.loading

    }

}

function mapDispatchToProps(dispatch) {
    return {
        omWindowModal: () => dispatch({ type: CALL_MODEL_WINDOW }),
        initState: () => dispatch(initState()),
        keyBaseToStore: (key) => dispatch({type: KEY_BASE_TO_STORE, key}),
        btnObjectDisabledOf: () => dispatch({type: BTN_OBJECT_DISABLED_OF})
       
    }
}



export default connect(mapSatteToProps, mapDispatchToProps)(Veu)