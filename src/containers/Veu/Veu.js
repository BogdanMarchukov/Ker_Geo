import React, { Component } from 'react'
import classes from './Veu.module.css'
import ObjectButton from '../../components/objectButton/ObjectButton'
import { connect } from 'react-redux'
import CreateNewObject from '../../components/CreateNewObject/CreateNewObject'


class Veu extends Component {

    state = {
        cls: classes.modal
    }


    

    render() {
        


        return (
            <div className={classes.Veu}>
                <h1>Выберите объект или создайте новый</h1>
                <button
                    className={classes.btn}
                    onClick = {this.createWindow}
                >
                    +
                 </button>
                <div className={classes.objectList}>
                    {this.props.veu.map((newVeu, index) => {
                        return (
                            
                            <ObjectButton
                                name={newVeu.name}
                                key={index}

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
        veu: state.veu.veu
    }
  
}



export default connect(mapSatteToProps) (Veu)