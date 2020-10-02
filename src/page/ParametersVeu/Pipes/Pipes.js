import React from 'react';
import classes from './Pipes.module.css'

const Pipes = props => {
    return (
        <div className={classes.Pipes}>
           <h1>Отметки труб</h1>
           <table border="1" width="100%" >
               <tr>
                   <th>6-Труб</th>
                   <th></th>
               </tr>
               <tr>
                   <th>160-ая</th>
                   <th></th>
               </tr>
               <tr>
                   <th>200-ая</th>
                   <th></th>
               </tr>
              
           </table>
           <button>Задать "0"</button>
        </div>
    );
}

export default Pipes;
