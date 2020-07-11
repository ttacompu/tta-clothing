import React from "react";
import CustomButton from "../custom-button/custom-button.component";
import {connect} from 'react-redux';
import "./cart-dropdown.styles.scss";

const CartDropdown = (props) => {
    console.log(props.items);
  return (
    <div className="cart-dropdown">
      <div className="cart-items"></div>
      <CustomButton>Go To Checkout</CustomButton>
    </div>
  );
};

const mapPropsToState = (state) => ({items : state.cart.cartItems})

export default connect(mapPropsToState)(CartDropdown);
