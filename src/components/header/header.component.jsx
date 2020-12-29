import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/crown.svg";

import { auth } from "../../firebase/firebase.utils";

import "./header.styles.scss";

const Header = ({ currentUser }) => (
  <div className="header">
    <Link className="logo-container" to="/">
      <Logo className="logo" />
    </Link>
    <div className="options">
      <Link className="option" to="/shop">
        SHOPS
      </Link>
      <Link className="option" to="/contact">
        CONTACT
      </Link>
      <Link className="option" to="/about">
        About us
      </Link>
      {currentUser ? (
        <div className="option" onClick={() => auth.signOut()}>
          SignOut
        </div>
      ) : (
        <Link className="option" to="/signin">
          SignIn
        </Link>
      )}
    </div>
  </div>
);

export default Header;