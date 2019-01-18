import React from 'react';
import PropTypes from 'prop-types';

const IconButton = ({ onClick, className, iconClassName }) => (
  <button type="button" className={`icon-button ${className}`} onClick={onClick}>
    <i className={`${iconClassName}`} />
  </button>);


IconButton.propTypes = {
  onClick: PropTypes.func,
  className: PropTypes.string,
  iconClassName: PropTypes.string,
};

export default IconButton;
