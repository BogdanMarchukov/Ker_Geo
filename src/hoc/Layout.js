import React, { Component } from 'react'
import classes from './Layout.module.css'
import MenuToggle from '../components/Navigation/MenuToggle/MenuToggle'
import Drawer from '../components/Navigation/Drawer/Drawer'


class Layout extends Component {

    state = {
        menu: false
    }

    toogleMenuHandler = () => {
        this.setState({
            menu: !this.state.menu
        })
    }

    menuCloseHendler = () => {
        this.setState({
            menu: false
        })
    }

    render() {

      


        return (
            <div className={classes.Layout}>

                <Drawer
                     isOnen={this.state.menu}
                     onClose={this.menuCloseHendler}
                />

                <MenuToggle
                    onToggle ={this.toogleMenuHandler}
                    isOnen={this.state.menu}
                />
                
                <main>
                    {this.props.children}
                </main>
            </div>
        )
    }
}

export default Layout