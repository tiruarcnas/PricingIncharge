import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './components/login/Login';
import Regstion from './components/login/Regstion';
import Routing from './Routing';
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
        <Routing />
<<<<<<< HEAD
      </Switch>   
=======
      </Switch>
>>>>>>> 9e403db0192007ea4071b0c0c95c48618d92c8dc
</Router>
  );
}
export default App;
