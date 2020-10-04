import React from 'react';
import classes from './ObjectButton.module.css'
import {NavLink} from 'react-router-dom'
import { connect } from 'react-redux';
import {OPEN_OBJECT} from '../../store/actions/actionTypes'



const ObjectButton = props => {


  
        return (
            <div className={classes.ObjectButton}>
                <NavLink to="veu-options">
                    <button 
                    onClick={()=> {
                        props.totallItem(props)
                       
                        }
                        
                    }
                    
                    >
                        <p>{props.name}</p>
                    </button>
                </NavLink>
                
            </div>

           
        );

        
}

function mapDispatchToProps(dispatch){
    return {
        totallItem: item => dispatch({type: OPEN_OBJECT, item})
    }
}

export default connect(null, mapDispatchToProps) (ObjectButton);
