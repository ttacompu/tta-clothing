import  UserActionTypes  from "./user.type";

export const googleSignInStart = () => ({
  type: UserActionTypes.GOOGLE_SIGN_IN_START,
});

export const emailSignInStart = (emailAndPassword) => ({
  type: UserActionTypes.EMAIL_SIGN_IN_START,
  payload: emailAndPassword
});

export const signInSuccess = (data) => ({
  type: UserActionTypes.SIGN_IN_SUCCESS,
  payload: data,
});
export const signInFail = (error) => ({
  type: UserActionTypes.SIGN_IN_FAIL,
  payload: error,
});

export const signOutStart = () => ({
  type: UserActionTypes.SIGNOUT_START,
});

export const signOutSuccess = () => ({
  type: UserActionTypes.SIGNOUT_SUCCESS,
});
export const signOutFail = (error) => ({
  type: UserActionTypes.SIGNOUT_FAIL,
  payload: error,
});

export const signUpStart = (userCredentials) =>(
  { type : UserActionTypes.SIGNUP_START, payload : userCredentials}
)

export const signUpSuccess = ({user, additionalData}) =>({type : UserActionTypes.SIGNUP_SUCCESS, payload : {user, additionalData}})
export const signUpFail = (error) => ({
  type: UserActionTypes.SIGNUP_FAIL,
  payload: error,
});

export const checkUserSession = () =>({ type : UserActionTypes.CHECK_USER_SESSION})