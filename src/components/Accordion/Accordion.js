import React, { Component } from 'react';
import Collapse from 'rc-collapse';

const { Panel } = Collapse;

class Accordion extends Component {
  constructor(props) {
    super(props);
    this.state = {
      accordion: false,
    };
  }

  render() {
    const { accordion } = this.state;

    return (
      <Collapse accordion={accordion}>
        <Panel header="How do I get my Music Video on Mixtape Madness Youtube Channel?">
          <p>You must submit your content video via email (<strong><a href="mailto:submissions@mixtapemadness.com">submissions@mixtapemadness.com</a></strong>), our A&R team will review the video and if approved, we will contact you further about making payment. Please include the following pieces of information in your email:</p>
          <ul>
            <li><b>Artist name</b></li>
            <li><b>Track title</b></li>
            <li><b>Producer</b></li>
            <li><b>Videographer</b></li>
            <li><b>Preferred upload date and time</b></li>
            <li><b>Download link (GoogleDrive, WeTransfer, YouTube, Vimeo).</b></li>
          </ul>
          <p>Failure to follow the structure could result in your submission being rejected or not being looked at.</p>
        </Panel>
        <Panel header="How much does it cost to upload my music video or audio on Mixtape Madness Youtube Channel?">
          <p>Once your audio/video has been approved. Our standard visual upload fee is <strong>£300</strong> and our audio upload fee is <strong>£200</strong>.</p>

          <ul>
            <li><strong>Package A (£300)</strong>: Youtube Upload.</li>

            <li><strong>Package B (£400)</strong>: 3 Tweets, 1 Blog Post. Including Package A.</li>

            <li><strong>Package C (£500)</strong>: 2 Instagram posts. Including Package A + B.*</li>
          </ul>
          <p>* this is package is by discretion of our internal social media team.</p>
        </Panel>
        <Panel header="Can I get a Next Up or Mad About Bars freestyle?">
          <p>Mad About Bars and Next Up series are curated by our in-house A&R team. All artists are individually selected by us. Every artist is different and the criteria is not exactly the same for each person. The only thing we can advise is, just keep pushing your music, we will find you when the time is right. We do not take money for it, so please do not contact us asking.</p>
        </Panel>
        <Panel header="Can I get a Mixtape Madness Exclusive?">
          <p>Mixtape Madness exclusives are selected by our in house A&R team. These are normally artists we have had some communication with prior to release. This is not for sale.</p>
        </Panel>
        <Panel header="Can you film my music video?">
          <p>We have access to various cameramen and video directors to help you execute your next music video. Please email us with your budget is and the song you would like. We will get back to you to arrange the video shoot.</p>
        </Panel>
        <Panel header="Can you promote my video on your social media?">
          <p>Promotion via Instagram is at the discretion of our social media team, however if you have a promo campaign with some budget, please contact: <strong><a href="mailto:daniel@mixtapemadness.com">daniel@mixtapemadness.com</a></strong></p>
        </Panel>
      </Collapse>
    );
  }
}

export default Accordion;
