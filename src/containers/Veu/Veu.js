import React, { Component } from 'react'
import classes from './Veu.module.css'
import ObjectButton from '../../components/objectButton/ObjectButton'
import { connect } from 'react-redux'


class Veu extends Component {

    render() {
    
        console.log(this.props.veu)
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

            </div>
        )
    }
}

function mapSatteToProps(state) {
    return  {veu: state.veu}
  
}



export default connect(mapSatteToProps) (Veu)