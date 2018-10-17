import React, { Component} from 'react';
import {Switch} from 'react-router-dom';
import {AppRoutes} from './routes/router'
import './assets/css/App.css';

class App extends Component {
  render() {
    return (
        <Switch key="APP">
            <AppRoutes/>
        </Switch>

    );
  }
}

export default App;
