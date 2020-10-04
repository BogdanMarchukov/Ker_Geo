import classes from './VeuOptions.module.css'
import React, { Component } from 'react'
import { connect } from 'react-redux';




class VeuOptions extends Component {

    Createlist = (namber) => {
        let item = [];
        for (let i = 0; i < namber; i++) {
        item.push(<li key={i}>ВЭУ-{i+1}</li>)
        }
        return item
    }

    render() {
        
        return (
            <div className = {classes.VeuOptions}>
                <div className={classes.Content}>
                    <h1>{this.props.name}</h1>
                    <ul>
                        {this.Createlist(this.props.veuItems)}
                    </ul>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
   console.log(state)
    return {
        veuItems: state.imemVeu.activObject,
        name: state.imemVeu.name
    }
}

export default connect(mapStateToProps)(VeuOptions)