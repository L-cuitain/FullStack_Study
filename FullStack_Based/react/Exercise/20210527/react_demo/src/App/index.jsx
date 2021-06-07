import React from 'react';
import './App.css';
import { HashRouter, NavLink} from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import routes from '../Routes';

class App extends React.Component {
  render() {
    return (
      <HashRouter>
        <ul className="nav_left">
          <li>
            <NavLink activeClassName="check_color" to="/home">Home</NavLink>
          </li>
          <li>
            <NavLink activeClassName="check_color" to="/about">About</NavLink>
          </li>
        </ul>

        <div className="nav_content">
          {renderRoutes(routes)}
        </div>

      </HashRouter>
    )
  }
}

export default App;
