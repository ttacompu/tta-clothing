import { takeLatest, call, put } from "redux-saga/effects";
import { ShopActionTypes } from "./shop.types";
import {
  firestore,
  convertCollectionsSnapShotToMap,
} from "../../firebase/firebase-utils";
import {
  fetchCollectionSuccess,
  fetchCollectionFail,
} from "../shop/shop.actions";

export function* fetchCollectionAsync() {
  try {
    const collectionRef = firestore.collection("collections");
    const snapshot = yield collectionRef.get();
    const collectionMap = yield call(convertCollectionsSnapShotToMap, snapshot);
    yield put(fetchCollectionSuccess(collectionMap))
  }
  catch(err){
    yield put(fetchCollectionFail(err.message))
  }
}
export function* fetchCollectionStart() {
  yield takeLatest(ShopActionTypes.FETCH_COLLECTION_START, fetchCollectionAsync);
}
