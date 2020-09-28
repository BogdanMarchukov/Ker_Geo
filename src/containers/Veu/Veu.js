import React, { Component } from 'react'
import classes from './Veu.module.css'
import ObjectButton from '../../components/objectButton/ObjectButton'
import { connect } from 'react-redux'
import CreateNewObject from '../../components/CreateNewObject/CreateNewObject'


class Veu extends Component {
 
    
  

    render() {
        
        
        return (
            <div className={classes.Veu}>
                <h1>Выберите объект или создайте новый</h1>
                <button
                    className={classes.btn}
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
                <div className={classes.modal}>
                    <CreateNewObject 
                    />
                </div>
            </div>
        )
    }
}

function mapSatteToProps(state) {
    return  {veu: state.veu}
  
}



export default connect(mapSatteToProps) (Veu)