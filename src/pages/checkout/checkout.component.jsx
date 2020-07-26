import React from "react";
//import "./checkout.styles.scss";
import {
  CheckoutPageContainer,
  CheckoutHeaderContainer,
  HeaderContainer,
  TotalContainer,
} from "./checkout.styles";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import {
  selectCartItems,
  selectCartTotal,
} from "../../redux/cart/cart.selectors";
import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import { removeItemFromCart } from "../../redux/cart/cart.action";
import StripeCheckoutButton from "../../components/stripe-button/stripe-button.component";

const CheckoutPage = ({ cartItems, total, removeItemFromCart }) => {
  return (
    <CheckoutPageContainer>
      <CheckoutHeaderContainer>
        <HeaderContainer>
          <span>Product</span>
        </HeaderContainer>

        <HeaderContainer>
          <span>Description</span>
        </HeaderContainer>
        <HeaderContainer>
          <span>Quantity</span>
        </HeaderContainer>
        <HeaderContainer>
          <span>Price</span>
        </HeaderContainer>
        <HeaderContainer>
          <span>Remove</span>
        </HeaderContainer>
      </CheckoutHeaderContainer>

      {cartItems.map((item) => (
        <CheckoutItem
          key={item.id}
          cartItem={item}
          clickHandler={removeItemFromCart}
        />
      ))}
      <TotalContainer>
        <span>TOTAL : ${total}</span>
      </TotalContainer>
      <StripeCheckoutButton price={total} />
    </CheckoutPageContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal,
});
const mapDispatchToProps = (dispatch) => ({
  removeItemFromCart: (item) => dispatch(removeItemFromCart(item)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CheckoutPage);
