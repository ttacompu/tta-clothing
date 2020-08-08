import { all, call } from "redux-saga/effects";
import {fetchCollectionStart} from "../redux/shop/shop.sagas";
import {userSaga} from "../redux/user/user.sagas";
import {cartSagas} from "../redux/cart/cart.sagas"

export default function* rootSaga(){
    yield all([call(fetchCollectionStart), call(userSaga), call(cartSagas)]);
}
