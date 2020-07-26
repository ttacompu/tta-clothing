import React from "react";

//import "./header.styles.scss";
import "./header.styles.jsx";

import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import { auth } from "../../firebase/firebase-utils";
import { connect } from "react-redux";
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";
import { selectCurrentUser } from "../../redux/user/user.selectors";
import { selectHidden } from "../../redux/cart/cart.selectors";
import { createStructuredSelector } from "reselect";
import {
  HeaderContainer,
  LogoContainer,
  OptionContainer,
  OptionLink,
  OptionDiv,
} from "./header.styles";

const Header = ({ currentUser, hidden }) => (
  <HeaderContainer>
    <LogoContainer to="/">
      <Logo className="logo" />
    </LogoContainer>

    <OptionContainer>
      <OptionLink to="/shop">SHOP</OptionLink>

      <OptionLink to="/shop">CONTACT</OptionLink>

      {currentUser ? (
        <OptionDiv onClick={() => auth.signOut()}>SIGN OUT</OptionDiv>
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

//export default  Header;
export default connect(mapStateToProp)(Header);
