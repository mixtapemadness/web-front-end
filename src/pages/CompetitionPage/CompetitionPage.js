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
        <div className="competition-page__header">
          <img src={fifaHead2Head} alt="Competition" />
        </div>
        <Page>
          <div className="competition-page__content">
            <div className="competition-page__rules">
              <h1>FIFA x MM Competition</h1>
              <h2>Win a chance to perform infront of 2000 people.</h2>
              <div className="competition-page__intro">
                <p>FIFA and Mixtape Madness have teamed up to give one lucky person a chance of performing in O2 arena amongst 2000 people.</p>
              </div>

              <div className="competition-page__list">
                <h3 className="competition-page__list-title">How to enter:</h3>
                <ul className="list list--check">
                  <li>Sign up below with your name and email.</li>
                  <li>Download the beat and record a freestyle.</li>
                  <li>Post it on your social media using the hashtag <strong><a href={COMPETITION_HASHTAG_URL} rel="noopener noreferrer" target="_blank">#Head2HeadFreestyle</a></strong>.</li>
                  <li>The winner will be announced on July 18th.</li>
                </ul>
              </div>
              <div className="competition-page__list">
                <h3 className="competition-page__list-title">Requirements:</h3>
                <ul className="list list--check">
                  <li>You must be over 18.</li>
                  <li>You can only enter once.</li>
                  <li>If you do not submit your name and email, your submissions will not be accepted.</li>
                </ul>
              </div>
            </div>
            <div className="competition-page__form">
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
