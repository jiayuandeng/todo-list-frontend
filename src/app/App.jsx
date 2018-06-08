import React, { Component } from 'react';
import { Provider } from 'react-redux'
import Router from './routes/Router';
import store from './store/store';
import './styles/App.css';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router/>
      </Provider>
    );
  }
}

export default App;