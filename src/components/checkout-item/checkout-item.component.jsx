import React from "react";
import "./checkout-item.styles.scss";
import { connect } from 'react-redux';

const CheckoutItem = ({ cartItem: { name, imageUrl, price, quantity, id }, clickHandler }) => (
  <div className="checkout-item">
    <div className="image-container">
      <img src={imageUrl} alt="item" />
    </div>
    <span className="name">{name}</span>
    <span className="quantity">{quantity}</span>
    <span className="price">{price}</span>
    <div className="remove-button" onClick={() =>clickHandler(id)}>&#10005;</div>
  </div>
);

export default CheckoutItem;
