import React, { Component } from 'react';
import Page from '../Page/Page';

import Button from '../../components/Button/Button';
import fifaHead2Head from '../../resources/assets/img/competition/mm_fifa_head2head.jpg';

class CompetitionPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fname: '',
      lname: '',
      email: '',
      termsAgreed: false,
    };
  }

  render() {
    const {
      fname, lname, email, termsAgreed,
    } = this.state;
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
                </ul>
              </div>
            </div>
            <div className="competition-page__form">
              <form onSubmit={() => {}}>
                <fieldset>
                  <input className="input input--primary" name="firstname" placeholder="First name" value={fname} />
                  <input className="input input--primary" name="lastname" placeholder="Last name" value={lname} />
                  <input className="input input--primary" name="email" placeholder="Email address" type="email" value={email} />
                  <label htmlFor="agreement" className="input-label">
                    <input id="agreement" className="checkbox" type="checkbox" checked={termsAgreed} />
                    Do you agree to the terms & conditions?
                  </label>
                </fieldset>
                <Button secondary> Apply Now</Button>
              </form>
            </div>
          </div>
        </Page>
      </div>
    );
  }
}

export default CompetitionPage;
