import React from 'react';
import { Switch, Route } from 'react-router-dom'

import { Home } from './pages/Home'
import { Detail } from './pages/Detail'
import { NotFound } from './pages/NotFound'

import './App.css';
import 'bulma/css/bulma.css'

class App extends React.Component{
  

render() {

  return (
    <div className="App">
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/detail/:movieId' component={Detail} />
        <Route component={NotFound} />
      </Switch>
    </div>
  );
}
}
 

export default App;
