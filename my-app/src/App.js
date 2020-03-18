import React from 'react';
import Home from './components/Home';
import Welcome from './components/Welcome';
import Navigation from './components/Navigation';
import Login from './components/Login';
import Register from './components/Register';
import Meetings from './components/Meetings';
import firebase from './Firebase.js';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      user: null
    };
  }
  componentDidMount() {
    const ref = firebase.database().ref('user');

    ref.on('value', snapshot => {
      let FBUser = snapshot.val();
      this.setState({ user: FBUser });
    });
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
