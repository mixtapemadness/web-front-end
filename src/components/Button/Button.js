/* eslint react/button-has-type: 0 */
import React from 'react';

const Button = ({
                  children, onClick, secondary, type,
}) => (
  <button
    className={`btn btn--${secondary ? 'secondary' : 'primary'}`}
    type={type}
    onClick={onClick}
  >
    {children}
  </button>);

export default Button;
