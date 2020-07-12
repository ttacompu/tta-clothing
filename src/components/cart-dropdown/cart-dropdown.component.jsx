import React from "react";
import CustomButton from "../custom-button/custom-button.component";
import {connect} from 'react-redux';
import "./cart-dropdown.styles.scss";
import CartItem from "../cart-item/cart-item.component";
import {withRouter} from "react-router-dom";
import { toggleCart } from '../../redux/cart/cart.action';

const CartDropdown = ({items, history, dispatch}) => {
    
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {
          items.length ?
          items.map(item =>(
            <CartItem key={item.id} item={item}></CartItem>
          ))
          :
          <span className="empty-message">Your Cart is empty!</span>
        }
          
      </div>
      <CustomButton onClick={()=>{history.push('/checkout'); dispatch(toggleCart())}}>Go To Checkout</CustomButton>
    </div>
  );
};

const mapPropsToState = (state) => ({items : state.cart.cartItems})

export default withRouter(connect(mapPropsToState)(CartDropdown));
