import classes from './VeuOptions.module.css'
import React, { Component } from 'react'
import { connect } from 'react-redux';
import VeuButton from '../../components/VeuButton/VeuButton'




class VeuOptions extends Component {
    Createlist = (namber) => {
        let item = [];
        for (let i = 0; i < namber; i++) {
        item.push(<VeuButton key={i} indexVeu={i} name= {i+1} />)
        }
        return item
    }

        
    

    render() {
        return (
            <div className = {classes.VeuOptions}>
                <div className={classes.Content}>
                    <h1>{this.props.name}</h1>
                        {this.Createlist(this.props.veuItems)}  
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        veuItems: state.imemVeu.activObject,
        name: state.imemVeu.name
    }
}

export default connect(mapStateToProps)(VeuOptions)