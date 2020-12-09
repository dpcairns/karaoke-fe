import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";
import './App.css';
import Login from './Login.js';
import SignUp from './SignUp.js';
import Home from './Home.js';
import PrivateRoute from './PrivateRoute.js';

import VideoPage from './VideoPage.js';
import AboutUs from './AboutUs.js';
import Favorites from './Favorites.js';
import Header from './Header';

export default class App extends Component {
  state = {
    username: localStorage.getItem('USERNAME') || '',
    token: localStorage.getItem('TOKEN') || '',
  }

  changeTokenAndUsername = (userName, token) => {
    localStorage.setItem('TOKEN', token);
    localStorage.setItem('USERNAME', userName);

    this.setState({
      username: userName,
      token: token
    })
  }

  logOut = () => {
    this.changeTokenAndUsername('', '')
  }

  render() {
    return (
      <div>
        <Router>

          { this.state.token && <Header /> }

          <Switch>
            <Route exact path='/login' render={(routerProps) =>
              <Login
                {...routerProps}
                changeTokenAndUsername={this.changeTokenAndUsername}
              />
            }
            />

            <Route
              exact
              path='/'
              render={(routerProps) =>
                <SignUp
                  {...routerProps}
                  changeTokenAndUsername={this.changeTokenAndUsername}
                />
              }
            />

            <PrivateRoute
              token={this.state.token}
              exact
              path='/home'
              render={(routerProps) => <Home {...routerProps} token={this.state.token} />} />

            <PrivateRoute
              token={this.state.token}
              exact
              path='/videos'
              render={(routerProps) =>
                <VideoPage
                  {...routerProps}
                  changeTokenAndUsername={this.changeTokenAndUsername}
                  token={this.state.token}
                />
              }
            />

            <PrivateRoute
              token={this.state.token}
              exact
              path='/favorites'
              render={(routerProps) =>
                <Favorites
                  {...routerProps}
                  changeTokenAndUsername={this.changeTokenAndUsername}
                  token={this.state.token}
                />
              }
            />
            
            <PrivateRoute
              token={this.state.token}
              exact
              path='/about-us'
              render={(routerProps) =>
                <AboutUs
                  {...routerProps}
                  changeTokenAndUsername={this.changeTokenAndUsername}
                  token={this.state.token}

                />
              }
            />

          </Switch>
        </Router>
      </div>
    )
  }
}

