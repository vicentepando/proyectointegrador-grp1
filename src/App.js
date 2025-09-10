import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './Screens/Home/Home';
import Detalle from './Screens/Detalle/Detalle';
import Favoritos from './Screens/Favoritos/Favoritos';
import NotFound from './Screens/NotFound/NotFound';
import Peliculas from './Screens/Peliculas/Peliculas';
import Series from './Screens/Series/Series';
import Search from './Screens/Search/Search';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch >
          <Route path="/" component={Home} exact={true} />
          <Route path="/detalle:id" component={Detalle} exact={true} />
          <Route path="/favoritos" component={Favoritos} exact={true} />
          <Route path=" " component={NotFound} />
          <Route path="/peliculas" component={Peliculas} exact={true} />
          <Route path="/series" component={Series} exact={true} />
          <Route path="/search" component={Search} exact={true} />
        </Switch>
      </div>

    </Router>

  );
}

export default App;
