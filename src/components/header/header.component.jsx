import React from "react";
import "./header.styles.jsx";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import { auth } from "../../firebase/firebase-utils";
import { connect } from "react-redux";
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";
import { selectCurrentUser } from "../../redux/user/user.selectors";
import { selectHidden } from "../../redux/cart/cart.selectors";
import { createStructuredSelector } from "reselect";
import {signOutStart} from "../../redux/user/user.action";
import {
  HeaderContainer,
  LogoContainer,
  OptionContainer,
  OptionLink,
  OptionDiv,
} from "./header.styles";

const Header = ({ currentUser, hidden, signOutStart }) => (
  <HeaderContainer>
    <LogoContainer to="/">
      <Logo className="logo" />
    </LogoContainer>

    <OptionContainer>
      <OptionLink to="/shop">SHOP</OptionLink>

      <OptionLink to="/shop">CONTACT</OptionLink>

      {currentUser ? (
        <OptionDiv onClick={() =>signOutStart()}>SIGN OUT</OptionDiv>
      ) : (
        <OptionLink to="/sign">SIGN IN</OptionLink>
      )}
      <CartIcon />
    </OptionContainer>
    {hidden ? null : <CartDropdown />}
  </HeaderContainer>
);

const mapStateToProp = () =>
  createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectHidden,
  });
const mapDispatchToProp = (dispatch) =>({ signOutStart : () => dispatch(signOutStart())})

//export default  Header;
export default connect(mapStateToProp, mapDispatchToProp)(Header);
