import React from 'react';
import './_Button.scss';

const Button = ({ children, onClick }) => (<button className="btn" type="button" onClick={onClick}>{children}</button>);

export default Button;
