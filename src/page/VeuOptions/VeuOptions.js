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
                    <h1>Список ВЭУ</h1>
                    <ul>
                        {this.Createlist(this.props.veuItems)}
                    </ul>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
   
    return {
        veuItems: state.imemVeu.activObject
    }
}

export default connect(mapStateToProps)(VeuOptions)