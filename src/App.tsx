
import React from 'react';
import './App.css';
import { Provider } from "react-redux";
import { Switch, Router, Route } from "react-router-dom";
import { createBrowserHistory } from "history";
import store from './store/store';
import routes from './routes';
import PrivateRoute from './components/PrivateRoute';
import { setCurrentUser } from './actions/authActions';
import { getLocalUser } from './utils/localStorageHelpers';

const history = createBrowserHistory({ forceRefresh: true });

const user = getLocalUser();
if (user && user.token) {
  store.dispatch(setCurrentUser(user));
}

function App() {
  return (
    <Provider store={store}>
      <Router history={history}>
        <Switch>
          {routes.map((r, i) => {
            if (r.private) {
              return <PrivateRoute key={i} {...r} />;
            } else {
              return <Route key={i} {...r} />;
            }
          })}
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
