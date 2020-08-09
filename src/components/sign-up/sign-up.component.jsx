import React, {useState} from "react";
import "./sign-up.styles.scss";
import { connect } from "react-redux"

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import { signUpStart} from '../../redux/user/user.action'

const SignUp =({signUp})=> {

  const [userCredentials, setCredentials ]= useState({displayName: '', email : '', password:'', confirmPassword:''});
  const { displayName, email, password, confirmPassword } = userCredentials;

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      alert("password don't match");
      return;
    }
    signUp({displayName, email, password  });
  };

  const handleChange = (event) => {
    const { value, name } = event.target;
    setCredentials({...userCredentials, [name] : value})
  };


    return (
      <div className="sign-up">
        <h2 className="title">I do not have an account </h2>
        <span>Sign-Up with your email and password</span>
        <form className="sign-up-form" onSubmit={handleSubmit}>
          <FormInput
            type="text"
            label="Display Name"
            name="displayName"
            value={displayName}
            onChange={handleChange}
          ></FormInput>
          <FormInput
            type="email"
            label="Email"
            name="email"
            value={email}
            onChange={handleChange}
          ></FormInput>
          <FormInput
            type="password"
            label="Password"
            name="password"
            value={password}
            onChange={handleChange}
          ></FormInput>
          <FormInput
            type="password"
            label="Confirm Password"
            name="confirmPassword"
            value={confirmPassword}
            onChange={handleChange}
          ></FormInput>
          <CustomButton type="submit">Sign Up</CustomButton>
        </form>
      </div>
    );
  
}

const mapDispatchToProps = (dispatch) =>({ signUp : (userCredentials)=>{dispatch(signUpStart(userCredentials))}})
export default connect(null, mapDispatchToProps)(SignUp);
