import React from "react";
import "./sign-up.styles.scss";
import { connect } from "react-redux"

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import { signUpStart} from '../../redux/user/user.action'

class SignUp extends React.Component {
  state = {
    displayName: "",
    email: "",
    password: "",
    confirmPassword: ""
  };

  handleSubmit = async (event) => {
    event.preventDefault();
    const { displayName, email, password, confirmPassword } = this.state;
    const { signUp} = this.props;

    if (password !== confirmPassword) {
      alert("password don't match");
      return;
    }
    signUp({displayName, email, password  });
  };

  handleChange = (event) => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    const { displayName, email, password, confirmPassword } = this.state;

    return (
      <div className="sign-up">
        <h2 className="title">I do not have an account </h2>
        <span>Sign-Up with your email and password</span>
        <form className="sign-up-form" onSubmit={this.handleSubmit}>
          <FormInput
            type="text"
            label="Display Name"
            name="displayName"
            value={displayName}
            onChange={this.handleChange}
          ></FormInput>
          <FormInput
            type="email"
            label="Email"
            name="email"
            value={email}
            onChange={this.handleChange}
          ></FormInput>
          <FormInput
            type="password"
            label="Password"
            name="password"
            value={password}
            onChange={this.handleChange}
          ></FormInput>
          <FormInput
            type="password"
            label="Confirm Password"
            name="confirmPassword"
            value={confirmPassword}
            onChange={this.handleChange}
          ></FormInput>
          <CustomButton type="submit">Sign Up</CustomButton>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) =>({ signUp : (userCredentials)=>{dispatch(signUpStart(userCredentials))}})
export default connect(null, mapDispatchToProps)(SignUp);
