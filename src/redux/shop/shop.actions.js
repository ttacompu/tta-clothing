import {ShopActionTypes} from './shop.types';

export const updateShopData = (data) =>({type : ShopActionTypes.UPDATE_COLLECTIONS, payload : data });