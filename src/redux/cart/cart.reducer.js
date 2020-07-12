import {CartActionTypes} from './cart.type';
import {addToCart, removeFromCart} from './cart.util'
const INIT_STATE ={
    hidden : true,
    cartItems : []
}
const cartReducer = (state=INIT_STATE, action) =>{
    switch(action.type){
        case CartActionTypes.TOGGLE_CART_HIDDEN:
            return {
                ...state,
                hidden : !state.hidden
            }
        case CartActionTypes.ADD_ITEM:
        return {
            ...state,
            cartItems : addToCart(state.cartItems, action.payload)
        }

        case CartActionTypes.REMOVE_ITEM:
            return {
                ...state,
                cartItems : removeFromCart(state.cartItems, action.payload)
            }
        default:
            return state;
    }
}

export default cartReducer;