import React from 'react';
import './cart-icon.styles.scss';
import {toggleCart} from "../../redux/cart/cart.action"
import {selectCartItemCounts} from "../../redux/cart/cart.selectors";
import {connect} from 'react-redux';
import {ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg';


const CartIcon = ({cartIconClick, totalItems}) =>(
    <div className="cart-icon" onClick={cartIconClick}>
        <ShoppingIcon className="shopping-icon" />
<span className="item-count">{totalItems}</span>
    </div>
)

const mapDispatchToProps = dispatch =>({cartIconClick : ()=> dispatch(toggleCart())});
const mapStateToProps = state =>({
    totalItems : selectCartItemCounts(state)
})

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);