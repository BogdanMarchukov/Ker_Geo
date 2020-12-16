import React, { Component } from 'react'
import classes from './Drawer.module.css'
import {NavLink} from 'react-router-dom'
import Backdrop from '../../Backdrop/Backdrop'

class Drawer extends Component {

    clickHandler = () => {
        this.props.onClose()
    }

    render() {
        const cls = [classes.Drawer]

        if (!this.props.isOnen) {
            cls.push(classes.close)
        }
        return (
            <React.Fragment>
                <nav className={cls.join(" ")}>
                    <ul>
                        <li>
                            <NavLink
                                to="/"
                                activeClassName={classes.active}
                                onClick={this.clickHandler}
                            >
                                Главная
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/lot"
                                activeClassName={classes.active}
                                onClick={this.clickHandler}
                            >
                                Жребий
                            </NavLink>
                        </li>
                    </ul>           
                </nav>
               { this.props.isOnen ? <Backdrop onClick={this.props.onClose}/> : null} 
            </React.Fragment>
        )
    }
}

export default Drawer