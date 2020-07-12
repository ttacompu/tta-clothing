import React from 'react';
import "./checkout.styles.scss";
import {connect} from 'react-redux';
import { createStructuredSelector} from 'reselect';
import {selectCartItems, selectCartTotal} from '../../redux/cart/cart.selectors';
import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import {removeItemFromCart } from '../../redux/cart/cart.action'


const CheckoutPage = ({cartItems, total, removeItemFromCart}) =>(
    <div className="checkout-page">
        <div className="checkout-header">
            <div className="header-block">
                <span>Product</span>
            </div>
            <div className="header-block">
                <span>Description</span>
            </div>
            <div className="header-block">
                <span>Quantity</span>
            </div>
            <div className="header-block">
                <span>Price</span>
            </div>
            <div className="header-block">
                <span>Remove</span>
            </div>
        </div>
        {
            cartItems.map(item =>(
                <CheckoutItem key={item.key} cartItem={item} clickHandler={removeItemFromCart} />
            ))
        }
        <div className="total">
            <span>TOTAL : ${total}</span>
        </div>
    </div>
)

const mapStateToProps = createStructuredSelector({ cartItems : selectCartItems, total : selectCartTotal })
const mapDispatchToProps = (dispatch) =>({
    removeItemFromCart : (item) => dispatch(removeItemFromCart(item))
})

export default connect(mapStateToProps, mapDispatchToProps)(CheckoutPage);