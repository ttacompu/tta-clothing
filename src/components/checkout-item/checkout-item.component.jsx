import React from "react";
import "./checkout-item.styles.scss";
import { connect } from "react-redux";
import { addItemToCart, decreaseFromCart } from "../../redux/cart/cart.action";

const CheckoutItem = ({
  cartItem: { name, imageUrl, price, quantity, id },
  clickHandler,
  increaseItem,
  decreaseItem
}) => {
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt="item" />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick={() => decreaseItem({ id, quantity })} >&#10094;</div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={() => increaseItem({ id, quantity })}>
          &#10095;
        </div>
      </span>
      <span className="price">{price}</span>
      <div className="remove-button" onClick={() => clickHandler({id})}>
        &#10005;
      </div>
    </div>
  );
};

const mapDispatchToState = (dispatch) => ({
  increaseItem: (item) => dispatch(addItemToCart(item)),
  decreaseItem: (item) => dispatch(decreaseFromCart(item))
});

export default connect(null, mapDispatchToState)(CheckoutItem);
