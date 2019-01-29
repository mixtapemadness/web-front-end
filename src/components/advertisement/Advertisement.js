import React, { Component } from 'react';
// import AdSense from 'react-adsense';

// import BackgroundImage from 'resources/assets/img/music.jpg';

class Advertisement extends Component {
  componentDidMount() {
    (window.adsbygoogle = window.adsbygoogle || []).push({});
  }

  render() {
    return (
      <section className="advertisement">
        <span className="advertisement__text">Advertisement</span>
        <ins
          className="adsbygoogle"
          style={{
            display: 'block',
          }}
          data-ad-client="ca-pub-9403258914718395"
          data-ad-slot="4168162721"
          data-ad-format="auto"
          data-full-width-responsive="true"
        />
      </section>
    );
  }
}

export default Advertisement;
