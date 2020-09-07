import React from "react";
import CustomButton from "../custom-button/custom-button.component";
import { addItemToCart } from "../../redux/cart/cart.action";
import { connect } from "react-redux";
import {
  CollectionItemContainer,
  CollectionFooterContainer,
  AddButton,
  BackgroundImage,
  NameContainer,
  PriceContainer,
} from "./collection-item.styles";

const CollectionItem = ({ id, name, price, imageUrl, addItemToCart }) => {
  return (
    <CollectionItemContainer>
      <BackgroundImage className="image" imageUrl={imageUrl} />

      <CollectionFooterContainer>
        <NameContainer>{name}</NameContainer>
        <PriceContainer>{price}</PriceContainer>
      </CollectionFooterContainer>
      <AddButton
        onClick={() => addItemToCart({ id, name, price, imageUrl })}
        inverted
      >
        Add to cart
      </AddButton>
    </CollectionItemContainer>
  );
};

const mapDispatchToProp = (dispatch) => ({
  addItemToCart: (item) => dispatch(addItemToCart(item)),
});
export default connect(null, mapDispatchToProp)(CollectionItem);
