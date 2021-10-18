import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import App from './App';

import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route exact path="/cre8">
          <App />
        </Route>
        <Route render={() => <Redirect to="/cre8" />} />
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
