import React from 'react';
import PropTypes from 'prop-types';

const Spinner = ({ isLightColor }) => (
  <div className={`spinner ${isLightColor ? 'spinner--is-light' : ''}`}>
    <div className="spinner__loader">Loading...</div>
  </div>
);
Spinner.propTypes = {
  isLightColor: PropTypes.bool,
};
export default Spinner;
