/* global googletag */

import React, { Component } from 'react';
import PropTypes from 'prop-types';

import AdSense from 'react-adsense';

class Advertisement extends Component {
  componentDidMount() {
    this.updateGoogleTags();
  }

  updateGoogleTags = () => {
    if (googletag) {
      googletag.cmd.push(() => { googletag.display('div-gpt-ad-1550497711029-0'); });
      googletag.cmd.push(() => { googletag.display('div-gpt-ad-1550497747165-0'); });
      googletag.cmd.push(() => { googletag.display('div-gpt-ad-1550568793125-0'); });
    }
  };

  render() {
    const {
      slot, client, style, format, responsive, border, uniqueKey, children, hideDesktop, hideMobile, hidden,
    } = this.props;
    return (
      <section className={`advertisement
      ${border ? 'advertisement--border' : ''}
      ${hideDesktop ? 'advertisement--hide-desktop' : ''}
      ${hideMobile ? 'advertisement--hide-mobile' : ''}
      ${hidden ? 'advertisement--hide' : ''}
      `}
      >
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
  hideDesktop: PropTypes.bool,
  hideMobile: PropTypes.bool,
  hidden: PropTypes.bool,
};

Advertisement.defaultProps = {
  format: 'auto',
  style: {},
  client: 'ca-pub-9403258914718395',
  slot: '',
  responsive: '',
  border: false,
  hideDesktop: false,
  hideMobile: false,
  hidden: false,
};
export default Advertisement;
