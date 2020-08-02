import {ShopActionTypes} from './shop.types';
import { firestore, convertCollectionsSnapShotToMap} from "../../firebase/firebase-utils";


export const fetchCollectionStart = () => ({ type : ShopActionTypes.FETCH_COLLECTION_START })
export const fetchCollectionSuccess = (data) => ({ type : ShopActionTypes.FETCH_COLLECTION_SUCCESS, payload : data })
export const fetchCollectionFail = (error) => ({ type : ShopActionTypes.FETCH_COLLECTION_FAIL, payload : error })

export const fetchCollectionStartAsync = () => {
    return (dispatch) => {
        const collectionRef = firestore.collection("collections");
        dispatch(fetchCollectionStart());

        collectionRef.get().then((snapshot) => {
         const mapData =convertCollectionsSnapShotToMap(snapshot);
          dispatch(fetchCollectionSuccess(mapData));
        } ).catch((error) => dispatch(fetchCollectionFail(error.message)))
    }
}
