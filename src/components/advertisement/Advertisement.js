/* global googletag */

import React, { Component } from 'react';
import PropTypes from 'prop-types';

import AdSense from 'react-adsense';

class Advertisement extends Component {
  componentDidMount() {
    this.updateGoogleTags();
  }

  componentWillReceiveProps() {
    // this.updateGoogleTags();
  }

  updateGoogleTags = () => {
    if (googletag) {
      googletag.cmd.push(() => { googletag.display('div-gpt-ad-1550497711029-0'); });
      googletag.cmd.push(() => { googletag.display('div-gpt-ad-1550497747165-0'); });
    }
  }

  render() {
    const {
      slot, client, style, format, responsive, border, uniqueKey, children,
    } = this.props;
    return (
      <section className={`advertisement ${border ? 'advertisement--border' : ''}`}>
        <span className="advertisement__text">Advertisement</span>
        {children || (
          <AdSense.Google
            key={uniqueKey}
            slot={slot}
            client={client}
            style={style}
            format={format}
            responsive={responsive}
          />
        )
        }
      </section>
    );
  }
}

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
