import React, { Component } from 'react';
import { FaUsers } from 'react-icons/fa';
import {NavLink} from 'react-router-dom';

class Navigation extends Component {
  render() {
    const { user } = this.props;

    return (
      <nav className="site-nav family-sans navbar navbar-expand bg-primary navbar-dark higher">
        <div className="container-fluid">
          <NavLink to="/" className="navbar-brand">
            <FaUsers className="mr-1" /> Meeting App
          </NavLink>
          <div className="navbar-nav ml-auto">
            {user && (
              <NavLink className="nav-item nav-link" to="/meetings">
                Meetings
              </NavLink>
            )}
            {!user && (
              <NavLink className="nav-item nav-link" to="/login">
                log in
              </NavLink>
            )}
            {!user && (
              <NavLink className="nav-item nav-link" to="/register">
                Register
              </NavLink>
            )}
            {user && (
              <NavLink className="nav-item nav-link" to="/login">
                log out
              </NavLink>
            )}
          </div>
        </div>
      </nav>
    );
  }
}

export default Navigation;