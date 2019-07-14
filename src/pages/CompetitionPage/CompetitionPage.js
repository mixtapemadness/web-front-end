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
            <div>
              <h2>Fifa and Mixtape Madness have teamed up to give one lucky person a chance of performing in O2 arena amongst 2000 people.</h2>
              <div className="competition-page__intro">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tempor urna vitae elit consequat fringilla. Donec elementum tincidunt purus, sed finibus nulla rhoncus eget. In vitae laoreet lectus.</p>
              </div>
              <h3>Whats in it for you:</h3>
              <ul>
                <li>A chance to perform at O2</li>
                <li>Some goody bags</li>
              </ul>
              <h3>Requirements:</h3>
              <ul>
                <li>You must be over 18.</li>
                <li>You can only enter once.</li>
              </ul>
            </div>
            <div className="competition-page__form">
              <form onSubmit={() => {}}>
                <fieldset>
                  <input className="input input--primary" name="firstname" placeholder="First name" value={fname} />
                  <input className="input input--primary" name="lastname" placeholder="Last name" value={lname} />
                  <input className="input input--primary" name="email" placeholder="Email address" type="email" value={email} />
                  <label htmlFor="agreement">
                    Do you agree to the terms & conditions?
                    <input id="agreement" type="checkbox" checked={termsAgreed} />
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
