import React from 'react';
import PropTypes from 'prop-types';
import AdSense from 'react-adsense';

const Advertisement = ({
  style, slot, client, format, responsive, border,
}) => (
  <section className={`advertisement ${border ? 'advertisement--border' : ''}`}>
    <span className="advertisement__text">Advertisement</span>
    <AdSense.Google
      slot={slot}
      client={client}
      style={style}
      format={format}
      responsive={responsive}
    />
  </section>
);

Advertisement.propTypes = {
  style: PropTypes.object,
  slot: PropTypes.string,
  client: PropTypes.string,
  format: PropTypes.string,
  responsive: PropTypes.string,
  border: PropTypes.bool,
};

Advertisement.defaultProps = {
  format: 'auto',
  style: {},
  client: 'ca-pub-9403258914718395',
  slot: '',
  responsive: '',
  border: false,
};
export default Advertisement;
