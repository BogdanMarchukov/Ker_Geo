import React from 'react';
import Veu from './containers/Veu/Veu';
import Layout from './hoc/Layout'
import {Route, Switch} from 'react-router-dom'
import VeuOptions from './page/VeuOptions/VeuOptions'
import ParametersVeu from './page/ParametersVeu/ParametersVeu'
import 'bootstrap/dist/css/bootstrap.min.css';
import Lot from "./page/Lot/Lot";



function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact={true} component= {Veu}/>
        <Route path="/veu-options" component= {VeuOptions}/>
        <Route path="/parametrse" component= {ParametersVeu}/>
        <Route path="/lot" component= {Lot}/>
      </Switch>
    </Layout>
  );
}

export default App;
