import React from 'react';
import PropTypes from 'prop-types';

import './_Spinner.scss';

const Spinner = ({ isLightColor }) => (
  <div className={`spinner ${isLightColor ? 'spinner--is-light' : ''}`}>
    <div className="spinner__loader">Loading...</div>
  </div>
);
Spinner.propTypes = {
  isLightColor: PropTypes.bool,
};
export default Spinner;
