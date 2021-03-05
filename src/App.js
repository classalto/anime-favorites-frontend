import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import Home from './Home/Home.js';
import Header from './Header/Header.js';
import SignupPage from './AuthPages/Signup.js';
import LoginPage from './AuthPages/Login.js';
import SearchPage from './Search/SearchPage.js';
import FavoritesPage from './Favorites/FavoritesPage.js';
import PrivateRoute from './Components/PrivateRoute.js';
import { setUser, getUser } from '../localstorage-utils.js';

export default class App extends Component {
  state = {
    user: getUser()
  }

  handleUserChange = (user) => {
    this.setState({ user })
    setUser(user);
  }

  handleLogout = () => {
    this.handleUserChange();
  }

  render() {
    const { user } = this.state;
    return (
      <div>
        <Router>
          <Header user={user} handleLogout={this.handleLogout} />
          <Switch>
            <Route
              path="/"
              exact
              render={(routerProps) => <Home {...routerProps} />}
            />
            <Route
              path="/signup"
              exact
              render={(routerProps) => <SignupPage handleUserChange={this.handleUserChange} {...routerProps} />}
            />
            <Route
              path="/login"
              exact
              render={(routerProps) => <LoginPage handleUserChange={this.handleUserChange} {...routerProps} />}
            />
            <Route
              path="/search"
              exact
              render={(routerProps) => <SearchPage {...routerProps} />}
            />
            <PrivateRoute
              path="/favorites"
              exact
              token={user && user.token}
              render={(routerProps) => <FavoritesPage {...routerProps} />}
            />
          </Switch>
        </Router>
      </div>
    );
  }
}
