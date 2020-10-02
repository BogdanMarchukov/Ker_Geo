import React from 'react';
import Veu from './containers/Veu/Veu';
import Layout from './hoc/Layout'
import {Route, Switch} from 'react-router-dom'
import VeuOptions from './page/VeuOptions/VeuOptions'
import ParametersVeu from './page/ParametersVeu/ParametersVeu'



function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact={true} component= {Veu}/>
        <Route path="/veu-options" component= {VeuOptions}/>
        <Route path="/parametrse" component= {ParametersVeu}/>
      </Switch>
    </Layout>
  );
}

export default App;
