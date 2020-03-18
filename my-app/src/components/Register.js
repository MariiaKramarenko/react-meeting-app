import React from 'react';
import FormError from '../form/FormError.js';
import firebase from '../Firebase.js';

class Register extends React.Component {
  constructor() {
    super();
    this.state = {//default state
      displayName: '',
      email: '',
      passOne: '',
      passTwo: '',
      errorMessage: null//default value of errormessage 
    };

     this.handleChange = this.handleChange.bind(this);//method for reaction on changing in our component
     this.handleSubmit = this.handleSubmit.bind(this);//submit method for submittin register-form
  }

  handleChange(e) {//method run if changes was
    const itemName = e.target.name;//recieve name which was writing in input register form
    const itemValue = e.target.value;//recieve value of input name which was writing  

    this.setState({ [itemName]: itemValue }, () => {//setState-change state of our component
      if (this.state.passOne !== this.state.passTwo) {//if password1 not fit for password2 
        this.setState({ errorMessage: 'Passwords no not match' });//show error message
      } else {// 
        this.setState({ errorMessage: null });//error message not showing
      }
    });
  }
  
  ///////////////////////////////////////////////
  handleSubmit(e) {//method reaction for registration in app
    var registrationInfo = {//object contain registration info about user
      displayName: this.state.displayName,//name of user
      email: this.state.email,//email of user
      password: this.state.passOne//password of user
    };
    e.preventDefault();

    firebase.auth().createUserWithEmailAndPassword(//send data for registration to firebase(created user)
        registrationInfo.email,//save email of user
        registrationInfo.password//save password of user
      )
      .catch(error => {//catching errors from firebase
        if (error.message !== null) {// logic for error message
          this.setState({ errorMessage: error.message });
        } else {//logic for to do if error message not exist
          this.setState({ errorMessage: null });
        }
      });
  }
  render() {
    return (
      <form className="mt-3" onSubmit={this.handleSubmit}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="card bg-light">
                <div className="card-body">
                  <h3 className="font-weight-light mb-3">Register</h3>
                  <div className="form-row">
                    {this.state.errorMessage !== null ? (//if error exist show component of FormError
                      <FormError
                        theMessage={this.state.errorMessage}//message status from state of component
                      />
                    ) : null}
                    <section className="col-sm-12 form-group">
                      <label
                        className="form-control-label sr-only"
                        htmlFor="displayName"
                      >
                        Display Name
                      </label>
                      <input
                        className="form-control"
                        type="text"
                        id="displayName"
                        placeholder="Display Name"
                        name="displayName"
                        required
                        value={this.state.displayName}
                        onChange={this.handleChange}
                      />
                    </section>
                  </div>
                  <section className="form-group">
                    <label
                      className="form-control-label sr-only"
                      htmlFor="email"
                    >
                      Email
                    </label>
                    <input
                      className="form-control"
                      type="email"
                      id="email"
                      placeholder="Email Address"
                      required
                      name="email"
                      value={this.state.email}
                      onChange={this.handleChange}
                    />
                  </section>
                  <div className="form-row">
                    <section className="col-sm-6 form-group">
                      <input
                        className="form-control"
                        type="password"
                        name="passOne"
                        placeholder="Password"
                        value={this.state.passOne}
                        onChange={this.handleChange}
                      />
                    </section>
                    <section className="col-sm-6 form-group">
                      <input
                        className="form-control"
                        type="password"
                        required
                        name="passTwo"
                        placeholder="Repeat Password"
                        value={this.state.passTwo}
                        onChange={this.handleChange}
                      />
                    </section>
                  </div>
                  <div className="form-group text-right mb-0">
                    <button className="btn btn-primary" type="submit">
                      Register
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    );
  }
}

export default Register;