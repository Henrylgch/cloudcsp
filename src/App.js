import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'; 
import 'bootstrap/dist/css/bootstrap.min.css'
import './styles/App.scss';

import Home from './pages/Home'


function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Home} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
