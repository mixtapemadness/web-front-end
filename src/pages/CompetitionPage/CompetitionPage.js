import React, { Component } from 'react';
import Page from '../Page/Page';

import fifaHead2Head from '../../resources/assets/img/competition/mm_fifa_head2head.jpg';
import CompetitionForm from './CompetitionForm';
import Spinner from '../../components/Spinner/Spinner';
import DownloadForm from './DownloadForm';

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
              <h1>Fifa x MM Competition</h1>
              <h2>Win a chance to perform infront of 2000 people.</h2>
              <div className="competition-page__intro">
                <p>Fifa and Mixtape Madness have teamed up to give one lucky person a chance of performing in O2 arena amongst 2000 people.</p>
              </div>

              <div className="competition-page__list">
                <h3 className="competition-page__list-title">Whats in it for you:</h3>
                <ul className="list list--check">
                  <li>A chance to perform at O2.</li>
                  <li>Some goody bags.</li>
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
