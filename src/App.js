import logo, { ReactComponent } from './logo.svg';
import './App.css';
import React from 'react';
import Home from './Home'
import Story from './Story';
import { Route, Link } from 'react-router-dom';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Route exact path="/" component={Home} />
        <Route exact path="/story" component={Story} />
      </div>
    );
  }
}

export default App;
