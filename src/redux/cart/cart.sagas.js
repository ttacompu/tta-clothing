import { takeLatest, call, put, all } from "redux-saga/effects";
import UserActionTypes from "../user/user.type";
import {clearCart} from './cart.action'

export function* clearCartStart(){
    yield put(clearCart())
}

export function* onSignOutSuccess(){
    yield takeLatest(UserActionTypes.SIGNOUT_START, clearCartStart);
}
export function* cartSagas(){
    yield all([call(onSignOutSuccess)]);
}