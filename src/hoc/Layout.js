import React, { Component } from 'react'
import classes from './Layout.module.css'
import MenuToggle from '../components/Navigation/MenuToggle/MenuToggle'
import Drawer from '../components/Navigation/Drawer/Drawer'


class Layout extends Component {

    state = {
        menu: false,
        passwordCls: classes.password,
        password: '1987',
        passwordUser: "",
        h1: "Введите пароль"
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

    inputHandler = (event) => {
            this.setState({
                passwordUser: event.target.value
            })
        
    }

    passwordHandler = () =>{
        if (this.state.passwordUser === this.state.password) {
            this.setState({
                passwordCls: classes.none
            })
        } else {
            this.setState({
                h1: "Не верный пароль"
            })
        }
    }

    render() {

        return (
            <div className={classes.Layout}>
                <div className={this.state.passwordCls}>
                    <div className={classes.FormPassword}>
                        <h1>{this.state.h1}</h1>
                        <input onChange={this.inputHandler}/>
                        <button onClick={this.passwordHandler}>Отправить</button>
                    </div>
                </div>
                <Drawer
                    isOnen={this.state.menu}
                    onClose={this.menuCloseHendler}
                />

                <MenuToggle
                    onToggle={this.toogleMenuHandler}
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