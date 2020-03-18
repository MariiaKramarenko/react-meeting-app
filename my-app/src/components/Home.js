import React  from 'react';
import {NavLink} from 'react-router-dom';

class Home extends React.Component {
  render() {
    const { user } = this.props;//use state data with props
    return (
      <div className="container text-center">
        <div className="row justify-content-center">
          <div className="col-10 col-md-10 col-lg-8 col-xl-7">
            <div className="display-4 text-primary mt-3 mb-2">
              Meeting App
            </div>
            <p className="lead">
              This simple app creates meetings, allows people to check
              in, and picks random users to award giveaways. 
            </p>

             {user == null && (
              <span>
                <NavLink
                  to="/register"
                  className="btn btn-outline-primary mr-2"
                >
                  Register
                </NavLink>
                <NavLink
                  to="/login"
                  className="btn btn-outline-primary mr-2"
                >
                  Log In
                </NavLink>
              </span>
            )}
            {user && (
              <NavLink to="/meetings" className="btn btn-primary">
                Meetings
              </NavLink>
            )}
          </div>{' '}
          {/* columns */}
        </div>
      </div>
    );
  }
}

export default Home;