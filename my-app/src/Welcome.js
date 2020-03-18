import React from 'react';
import {NavLink} from 'react-router-dom';

class Welcome extends React.Component {
  render() {
    const { user } = this.props;//use state data with props

    return (
      <div className="text-center mt-4">
        <span className="text-secondary font-weight-bold pl-1">
          Welcome {user}
        </span>
        ,
        <NavLink to="/" className="font-weight-bold text-primary pl-1">
          log out
        </NavLink>
      </div>
    );
  }
}

export default Welcome;