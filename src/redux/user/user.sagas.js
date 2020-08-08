import { takeLatest, call, put, all } from "redux-saga/effects";
import UserActionTypes from "./user.type";

import {
  googleProvider,
  auth,
  createUserProfileDocument,
  getCurrentUser,
} from "../../firebase/firebase-utils";

import { signInSuccess, signInFail, signOutFail, signOutSuccess, signUpFail, signUpSuccess } from "../../redux/user/user.action";

export function* getSnapShotFromUserAuth(userAuth, additionalData) {
  try {
    const userRef = yield call(createUserProfileDocument, userAuth, additionalData);
    const userSnapshot = yield userRef.get();
    yield put(signInSuccess({ id: userSnapshot.id, ...userSnapshot.data() }));
  } catch(err) {
    yield put(signInFail(err));
  }
}

export function* googleSignInStart() {
  
  try {
    const { user } = yield auth.signInWithPopup(googleProvider);
    yield getSnapShotFromUserAuth(user);
  } catch (err) {
    yield put(signInFail(err));
  }
}

export function* emailSignInStart({ payload: { email, password } }) {
  try {
    const { user } = yield auth.signInWithEmailAndPassword(email, password);
    yield getSnapShotFromUserAuth(user);
  } catch (error) {
    yield put(signInFail(error));
  }
}

export function* onGoogleSignInStart() {
  yield takeLatest(UserActionTypes.GOOGLE_SIGN_IN_START, googleSignInStart);
}

export function* onEmailSignInStart() {
  yield takeLatest(UserActionTypes.EMAIL_SIGN_IN_START, emailSignInStart);
}


export function* userAuthenticated(){
  try{
      const userAuth = yield getCurrentUser();
        if(!userAuth) return;
        yield getSnapShotFromUserAuth(userAuth);
  }
  catch(error){
    yield put(signInFail(error));
  }

}
export function* onUserAuthenticated(){
  yield takeLatest(UserActionTypes.CHECK_USER_SESSION, userAuthenticated)

}

export function* signOut(){
  try{
    yield auth.signOut();
    yield put(signOutSuccess());

  }catch(error){
    yield put(signOutFail(error));
  }
}

export function* onSignOut(){
  yield takeLatest(UserActionTypes.SIGNOUT_START, signOut)
}

export function* signUp({payload : {email, password, displayName}}){
  try{
    const { user} = yield auth.createUserWithEmailAndPassword(email, password);
    yield put(signUpSuccess({user, additionalData : { displayName}}))

  }catch(error){
      yield put(signUpFail(error))
  }
}

export function* onSignUp(){
  yield takeLatest(UserActionTypes.SIGNUP_START, signUp)
}

export function* signInAfterSignUp({payload : {user, additionalData}}){
    yield getSnapShotFromUserAuth(user, additionalData) 
}

export function* onSignUpSuccess(){
  yield takeLatest(UserActionTypes.SIGNUP_SUCCESS, signInAfterSignUp)
}

export function* userSaga() {
  yield all([call(onGoogleSignInStart), call(onEmailSignInStart), call(onUserAuthenticated), call(onSignOut), call(onSignUp), call(onSignUpSuccess)]);
}
