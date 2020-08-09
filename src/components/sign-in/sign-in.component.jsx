import React, { useState } from "react";
import "./sign-in.styles.scss";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import {
  googleSignInStart,
  emailSignInStart,
} from "../../redux/user/user.action";
import { connect } from "react-redux";

const SignInComponent = ({emailSignInStart, signInWithGoogle}) => {
  const [userCredentials, setCredentials] = useState({email : '', password : ''});
  const {email, password} = userCredentials;


  const handleSubmit = async (event) => {
    event.preventDefault();
    emailSignInStart(email, password);
  
  };

  const handleChange = (event) => {
    const { value, name } = event.target;
    setCredentials({...userCredentials, [name] : value})
  };

  return (
    <div className="sign-in">
      <h2>I already have an account </h2>
      <span className="title">Sign in with your email and password</span>

      <form onSubmit={handleSubmit}>
        <FormInput
          label="email"
          name="email"
          type="email"
          value={email}
          required
          handleChange={handleChange}
        />
        <FormInput
          label="password"
          name="password"
          type="password"
          value={password}
          required
          handleChange={handleChange}
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
};

const mapDispatchToProps = (dispatch) => ({
  signInWithGoogle: () => dispatch(googleSignInStart()),
  emailSignInStart: (email, password) =>
    dispatch(emailSignInStart({ email, password })),
});

export default connect(null, mapDispatchToProps)(SignInComponent);
