import React from 'react';
import './cart-icon.styles.scss';
import {toggleCart} from "../../redux/cart/cart.action"
import {connect} from 'react-redux';
import {ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg';


const CartIcon = ({cartIconClick}) =>(
    <div className="cart-icon" onClick={cartIconClick}>
        <ShoppingIcon className="shopping-icon" />
        <span className="item-count">0</span>
    </div>
)

const mapDispatchToProps = dispatch =>({cartIconClick : ()=> dispatch(toggleCart())})

export default connect(null, mapDispatchToProps)(CartIcon);