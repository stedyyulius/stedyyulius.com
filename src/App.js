import React, { Component } from 'react';
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import {Provider} from 'react-redux'

import store from './store/store.js'
import './App.css';

import Profile from './components/Profile.js'
import Menubar from './components/Menubar.js'
import Portofolios from './components/Portofolios.js'
import Interests from './components/Interests.js'
import Achievements from './components/Achievements.js'
import Footer from './components/Footer.js'
import Email from './components/Email.js'

class App extends Component {
  render() {
    return (
    <Provider store = {store}>
      <BrowserRouter>
      <div className="App"> 
        <Menubar />
        
        <Switch>
          
          <Route
            exact path="/" 
            component={Profile}
          />
          
          <Route
            exact path="/Portofolios"
            component={Portofolios}
          />
          
          <Route
            exact path="/Interests"
            component={Interests}
          />
          
          <Route
            exact path="/Achievements"
            component={Achievements}
          />
          
          <Route
            exact path="/stedyyulius@gmail.com"
            component={Email}
          />
          
        </Switch>
        
      <Footer />  
      </div>
    </BrowserRouter>
  </Provider>
    );
  }
}

export default App;

