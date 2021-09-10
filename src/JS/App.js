import Home from './Home'
import Test from './Test'
import Testa from './Testa'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/test">
            <Test />
          </Route>
          <Route exact path="/test/a">
            <Testa />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
