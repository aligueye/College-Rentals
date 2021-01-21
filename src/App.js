import React, { Component } from 'react';
import {
  Route,
  NavLink,
  HashRouter
} from 'react-router-dom'
import Home from './components/Home'
import Login from './components/Login'
import Results from './components/Results'
import './css/App.css'

export default class App extends Component {
  render() {
    return (
      <div>
        <HashRouter>
          <div className="nav-container">
              <div className='brand-name'>
                      <NavLink
                        className = 'active' 
                        to='/'>
                          SpotZ   
                      </NavLink>
              </div>   
              <div>
                      <NavLink 
                        to='/login'>
                          Login | Sign Up   
                      </NavLink>
              </div>
          </div>
          <div className='content'>
                <Route exact path='/'
                        component={Home}/>
                <Route path='/login'
                        component={Login}/>
                <Route path='/results'
                        component={Results}/>
          </div>
        </HashRouter>
      </div>
    );
  }
}
