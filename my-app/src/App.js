import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Home from './Home';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      user: null
    };
  }
 render() {

    return <Home user={this.state.user} />;
  }
}

export default App;
