import React from "react";
import "./collection-item.styles.scss";
import CustomButton from '../custom-button/custom-button.component';
import {addItemToCart} from  '../../redux/cart/cart.action';
import {connect} from 'react-redux';

const CollectionItem = ({ id, name, price, imageUrl, addItemToCart }) =>{
    
   return  (
    
    <div className="collection-item">
      <div
        className="image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      ></div>
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
        <CustomButton inverted onClick={()=>{addItemToCart({id, name, price, imageUrl})} } >Add to Cart</CustomButton>
    </div>
  );
}

const mapDispatchToProp = (dispatch) =>({ addItemToCart : (item) => dispatch(addItemToCart(item)) })
export default connect(null, mapDispatchToProp)(CollectionItem);
