import React, { Component, Suspense } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import angel from './angel.svg';
import devil from './devil.svg';

const Angel = React.lazy(() => import('../Angel'));
const Devil = React.lazy(() => import('../Devil'));

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Make you choice</h1>
          <Router>
            <React.Fragment>
              <Link to="/angel">
                <img src={angel} style={{ width: 150, height: 150 }} alt="" />
              </Link>
              <Link to="/devil">
                <img src={devil} style={{ width: 150, height: 150 }} alt="" />
              </Link>
              <Suspense fallback={<h2>Loading...</h2>}>
                <Switch>
                  <Route path="/angel" component={Angel} />
                  <Route path="/devil" component={Devil} />
                </Switch>
              </Suspense>
            </React.Fragment>
          </Router>
        </header>
      </div>
    );
  }
}

export default App;
