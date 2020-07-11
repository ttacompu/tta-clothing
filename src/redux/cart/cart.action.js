import {CartActionTypes} from './cart.type'

 export const toggleCart = () => ({type : CartActionTypes.TOGGLE_CART_HIDDEN });
 export const addItemToCart = (item) => ({type : CartActionTypes.ADD_ITEM, payload :item });
     