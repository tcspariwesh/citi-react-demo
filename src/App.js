import logo from './logo.svg';
import './App.css';
import { Userform } from './components/userform';
import { Link, Route,  BrowserRouter as Router, Switch } from 'react-router-dom';
import { Home } from './components/Home';

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/users">Users</Link>
              </li>
            </ul>
          </nav>

          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/users">
              <Userform />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
