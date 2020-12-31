import React from "react";

import "./cart-dropdown.styles.scss";

import CustomButton from "../custombutton/custombutton.component";

const CartDropdown = () => (
  <div className="cart-dropdown">
    <div className="cart-items" />
    <CustomButton> CHECKOUT</CustomButton>
  </div>
);

export default CartDropdown;
