import React, { Component } from 'react'
import classes from './Veu.module.css'
import ObjectButton from '../../components/objectButton/ObjectButton'
import { connect } from 'react-redux'
import CreateNewObject from '../../components/CreateNewObject/CreateNewObject'
import {CALL_MODEL_WINDOW} from '../../store/actions/actionTypes'




class Veu extends Component {

    state = {
        cls: classes.modal
        
    }



    render() {
 
        return (
            <div className={classes.Veu}>
                <h1>Выберите объект или создайте новый</h1>
                <button
                    className={this.props.btn_veu}
                    onClick = {this.props.omWindowModal}
                >
                    +
                 </button>
                <div className={classes.objectList}>
                    {this.props.veu.map((newVeu, index) => {
                        return (
                            
                            <ObjectButton
                                name={newVeu.name}
                                key={index}
                                namber={newVeu.namber}
                                index={index}
                            />
                            
                        )
                    })}
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
        btn_veu:state.cls.btn
    }
  
}

function mapDispatchToProps(dispatch){
    return {
        omWindowModal: () => dispatch({type: CALL_MODEL_WINDOW })
    }
}



export default connect(mapSatteToProps, mapDispatchToProps) (Veu)