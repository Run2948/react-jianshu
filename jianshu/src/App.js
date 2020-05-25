import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Header from './common/header';
import Home from './pages/home';
import Login from './pages/login';
import Write from './pages/write';
import Detail from './pages/detail/loadable';


import store from './store'

import { ResetStyle, IconFont } from './style';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <ResetStyle />
          <IconFont />
          <Header />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/login' component={Login} />
            <Route exact path='/write' component={Write} />
            <Route exact path='/detail/:id' component={Detail} />
          </Switch>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
