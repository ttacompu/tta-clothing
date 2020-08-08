import CartActionTypes from './cart.type';
import {addToCart, removeFromCart, decreaseFromCart} from './cart.util'
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

        
        case CartActionTypes.DECREASE_ITEM:
            return {
                ...state,
                cartItems : decreaseFromCart(state.cartItems, action.payload)
            }

        case CartActionTypes.CLEAR_CART:
            return {
                ...state,
                cartItems : []
            }
        default:
            return state;
    }
}

export default cartReducer;