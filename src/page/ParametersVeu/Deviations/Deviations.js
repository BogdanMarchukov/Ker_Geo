import React, { Component } from 'react'
import classes from './Deviations.module.css'

export default class Deviations extends Component {

    state = {
        cls1: classes.inputClass,
        btnWrite1: "" ,
        btnSave: classes.none
    }

    render() {
        return (
            <div className={classes.Deviations}>
               <h1>Корзина(Низ)</h1>
               <table border="1" width="100%" >
                   <tr>
                       <th>Опорный флянец</th>
                       <th></th>
                   </tr>
                   <tr>
                       <th>Шаблонный флянец</th>
                       <th></th>
                   </tr>
                   <tr>
                       <th>Анкер</th>
                       <th></th>
                   </tr>
                   <tr>
                       <th>Исполнитель</th>
                       <th></th>
                   </tr>
                   <tr>
                       <th>Дата</th>
                       <th></th>
                   </tr>
               </table>
               <div className={this.state.cls1}>
                   <input placeholder="Опорный флянец"/>
                   <input placeholder="Шаблонный флянец"/>
                   <input placeholder="Анкер"/>
                   <input placeholder="Исполнитель"/>
                   <input placeholder="Дата"/>
               </div>
               <button>Сохранить</button>
               <button className={this.state.btnSave}>Вписать</button>
               <h1>До Бетона</h1>
               <table border="1" width="100%" >
                   <tr>
                       <th>Шаблонный флянец</th>
                       <th></th>
                   </tr>
                   <tr>
                       <th>Анкер</th>
                       <th></th>
                   </tr>
                   <tr>
                       <th>Исполнитель</th>
                       <th></th>
                   </tr>
                   <tr>
                       <th>Дата</th>
                       <th></th>
                   </tr>
               </table>
               <button>Вписать</button>
               <h1>Бетонирование</h1>
               <table border="1" width="100%" >
                   <tr>
                       <th>Шаблонный флянец</th>
                       <th></th>
                   </tr>
                   <tr>
                       <th>Анкер</th>
                       <th></th>
                   </tr>
                   <tr>
                       <th>Исполнитель</th>
                       <th></th>
                   </tr>
                   <tr>
                       <th>Дата</th>
                       <th></th>
                   </tr>
               </table>
               <button>Вписать</button>
               
            </div>
        );
    }
}
