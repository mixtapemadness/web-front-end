import React from 'react';

const Button = ({ children, onClick, secondary }) => (<button className={`btn btn--${secondary ? 'secondary' : 'primary'}`} type="button" onClick={onClick}>{children}</button>);

export default Button;
