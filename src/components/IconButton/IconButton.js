import React from 'react';
import PropTypes from 'prop-types';

const IconButton = ({
  onClick, className = '', iconClassName, children,
}) => (
  <button type="button" className={`icon-button ${className}`} onClick={onClick}>
    {children}
    <i className={`${iconClassName}`} />
  </button>);

IconButton.defaultProps = {
  onClick: () => {},
  className: '',
  iconClassName: '',
};

IconButton.propTypes = {
  onClick: PropTypes.func,
  className: PropTypes.string,
  iconClassName: PropTypes.string,
};

export default IconButton;
