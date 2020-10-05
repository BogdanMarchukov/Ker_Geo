import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import classes from './VeuButton.module.css'
import{CREATE_ACTIV_INDEX_VEU} from '../../store/actions/actionTypes'

const VeuButton = props => {
    return (
        <div className={classes.VeuButton}>
            <NavLink to = "parametrse">
                <button onClick={()=>{
                    props.clickHandler(props.indexVeu)
                }}>
                    ВЭУ-{props.name}
                </button>
            </NavLink>
        </div>
    );
}

function MapDispathToProps(dispatch){
    return {
        clickHandler: activIndexVeu => dispatch({type: CREATE_ACTIV_INDEX_VEU, activIndexVeu})
    }
    
}

export default connect(null, MapDispathToProps) (VeuButton)
