import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import Home from './Home/Home.js';
import SignupPage from './AuthPages/Signup.js';
import LoginPage from './AuthPages/Login.js';
import SearchPage from './Search/SearchPage.js';
import FavoritesPage from './Favorites/FavoritesPage.js';

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route
            path="/"
            exact
            render={(routerProps) => <Home {...routerProps} />}
          />
          <Route
            path="/signup"
            exact
            render={(routerProps) => <SignupPage {...routerProps} />}
          />
          <Route
            path="/login"
            exact
            render={(routerProps) => <LoginPage {...routerProps} />}
          />
          <Route
            path="/search"
            exact
            render={(routerProps) => <SearchPage {...routerProps} />}
          />
          <Route
            path="/favorites"
            exact
            render={(routerProps) => <FavoritesPage {...routerProps} />}
          />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
