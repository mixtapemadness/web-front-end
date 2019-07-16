import React, { Component } from 'react';
import Page from '../Page/Page';

import fifaHead2Head from '../../resources/assets/img/competition/mm-head2head-freestyle.png';
import CompetitionForm from './CompetitionForm';
import Spinner from '../../components/Spinner/Spinner';
import DownloadForm from './DownloadForm';
import { COMPETITION_HASHTAG_URL } from '../../constants/index';

class CompetitionPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showLoader: false,
      showCompletePage: false,
    };
  }

  handleOnSubmitForm = () => {
    this.setState({
      showLoader: true,
    }, () => {
      // TODO: call mailchimp API
      this.setState({
        showLoader: false,
        showCompletePage: true,
      });
    });
    return false;
  };

  resetForm = () => {
    this.setState({
      showLoader: false,
      showCompletePage: false,
    });
  };

  render() {
    const { showLoader, showCompletePage } = this.state;
    return (
      <div className="competition-page">
        <div
          className="competition-page__header"
          style={{
            backgroundImage: `url(${fifaHead2Head})`,
          }}
        >
          <a href="#competition" className="competition-page__scroll"><i className="fa fa-chevron-down bounce" /></a>
        </div>
        <Page>
          <div className="competition-page__content">
            <div className="competition-page__rules">
              <h1>FIFA x MM Competition</h1>
              <h2>Win a chance to perform in front of 2000 people.</h2>
              <div className="competition-page__intro">
                <p>FIFA and Mixtape Madness have teamed up to give 4 lucky artists a chance to battle it out on stage in the ultimate freestyle competition, live at the O2 arena in front of an audience of 2,000+ at the FIFA eWorld Cup Final.</p>
                <p>If chosen you will need to attend a content day on 25th July and then the live final on 4th August.</p>
              </div>

              <div className="competition-page__list">
                <h3 className="competition-page__list-title">How to enter:</h3>
                <ul className="list list--check">
                  <li>Sign up below with your name and email.</li>
                  <li>Download the beat and record a freestyle.</li>
                  <li>Use the beat provided to create a Football or FIFA inspired freestyle.</li>
                  <li>Post it on your Instagram using the hashtag <strong><a href={COMPETITION_HASHTAG_URL} rel="noopener noreferrer" target="_blank">#FIFAeWorldCup</a></strong> & <strong><a href={COMPETITION_HASHTAG_URL} rel="noopener noreferrer" target="_blank">#FIFAFreestyle</a></strong>.</li>
                  <li>The competition will be closed on the 22nd July at Midday.</li>
                  <li>The finalists will be announced publically on the 29th July, but will be contacted directly on the 23rd July if successful.</li>
                  <li>Click here for <a href="/fifa-e-world-up-terms">full terms and conditions.</a></li>
                </ul>
              </div>
              <div className="competition-page__list">
                <h3 className="competition-page__list-title">Requirements:</h3>
                <ul className="list list--check">
                  <li>The Competition is open to residents in UK only.</li>
                  <li>Entrants under the age of 16 are not permitted to participate in the Competition.</li>
                  <li>Do not use any other music sample or other sound recording apart from the provided beat.</li>
                  <li>If you do not submit your name and email, your submissions will not be accepted.</li>
                </ul>
              </div>
            </div>
            <div id="#competition" className="competition-page__form">
              {showLoader && <Spinner />}
              {showCompletePage ? <DownloadForm handleOnClickGoBack={this.resetForm} /> : <CompetitionForm handleSubmit={this.handleOnSubmitForm} />}
            </div>
          </div>
        </Page>
      </div>
    );
  }
}

export default CompetitionPage;
