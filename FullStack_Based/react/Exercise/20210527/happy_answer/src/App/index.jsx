import React from 'react';

import { HashRouter } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import routes from '../Routes';

class App extends React.Component{
  render(){
    return (
      <HashRouter>
        <div>
          {renderRoutes(routes)}
        </div>
      </HashRouter>
    )
  }
}

export default App;
