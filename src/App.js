import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './components/login/Login';
import Regstion from './components/login/Regstion';
import Routing from './Routing';
import MiniDrawer from './components/appbar/AppBar';
function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Login />
        </Route>
        <Route exact path="/Regstion">
          <Regstion />
        </Route>

        <MiniDrawer />
      </Switch>
    </Router>
  );
}

export default App;
