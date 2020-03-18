import React from 'react';
import Home from './Home';
import Welcome from './Welcome';
import Navigation from './Navigation';
import Login from './Login';
import Register from './Register';
import Meetings from './Meetings';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      user: null
    };
  }

  render() {
    return (
      <div>
        <Navigation user={this.state.user} />
        {this.state.user && <Welcome user={this.state.user} />}
          <Home path="/" user={this.state.user} />
          <Login path="/login" />
          <Meetings path="/meetings" />
          <Register path="/register" />

      </div>
    );
  }
}

export default App;
