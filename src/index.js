import React from "react";
import ReactDOM from "react-dom";
import {Provider} from "react-redux";
import {BrowserRouter as Router} from "react-router-dom";
import App from './components/app';
import ErrorBoundry from "./components/error-boundry";
import GamestoreService from "./services/gamestore-service";
import {GamestoreServiceProvider} from "./components/gamestore-service-context";

import store from "./store";

const gamestoreService = new GamestoreService();
ReactDOM.render(
    <Provider store = {store}>
        <ErrorBoundry>
            <GamestoreServiceProvider value = {gamestoreService}>
              <Router>
                  <App
                  {{Hello}}
                  />
              </Router>
            </GamestoreServiceProvider>
        </ErrorBoundry>
    </Provider>, document.getElementById('root')
);