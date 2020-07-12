import React from "react";
import CustomButton from "../custom-button/custom-button.component";
import {connect} from 'react-redux';
import "./cart-dropdown.styles.scss";
import CartItem from "../cart-item/cart-item.component";

const CartDropdown = ({items}) => {
    
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {
          items.map(item =>(
            <CartItem key={item.id} item={item}></CartItem>
          ))
        }
          
      </div>
      <CustomButton>Go To Checkout</CustomButton>
    </div>
  );
};

const mapPropsToState = (state) => ({items : state.cart.cartItems})

export default connect(mapPropsToState)(CartDropdown);
