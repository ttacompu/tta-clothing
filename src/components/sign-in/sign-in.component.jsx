import React from "react";
import "./sign-in.styles.scss";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import {googleSignInStart, emailSignInStart } from "../../redux/user/user.action"
import { connect } from 'react-redux';

class SignInComponent extends React.Component {
  state = {
    email: "",
    password: "",
  };

  handleSubmit = async (event) => {
    event.preventDefault();
    const { emailSignInStart} = this.props;
    const {email, password} = this.state;
    emailSignInStart(email, password);
  
  };

  handleChange = (event) => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    const {signInWithGoogle} = this.props;
    return (
      <div className="sign-in">
        <h2>I already have an account </h2>
        <span className="title">Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            label="email"
            name="email"
            type="email"
            value={this.state.email}
            required
            handleChange={this.handleChange}
          />
          <FormInput
            label="password"
            name="password"
            type="password"
            value={this.state.password}
            required
            handleChange={this.handleChange}
          />

          <div className="buttons">
            <CustomButton type="submit">Sign In</CustomButton>
            <CustomButton type="button" onClick={signInWithGoogle} isGoogleSignIn>
              Sign In with Google
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}
const mapDispatchToProps = (dispatch) => ({ 
  signInWithGoogle : () => dispatch(googleSignInStart()),
  emailSignInStart : (email, password) => dispatch(emailSignInStart({email, password}))

})

export default connect(null, mapDispatchToProps)(SignInComponent);
