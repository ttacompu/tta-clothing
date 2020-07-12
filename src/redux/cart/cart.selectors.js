import {createSelector} from 'reselect';

const selectCart = state => state.cart;

export const selectCartItems = createSelector([selectCart],  (cart) => cart.cartItems );

export const selectCartItemCounts = createSelector([selectCartItems], (cartItems) => cartItems.reduce((a,b) => a += b.quantity,0) );