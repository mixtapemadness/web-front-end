import React, { Component, Fragment } from 'react';
import Page from '../Page/Page';

import fifaHead2Head from '../../resources/assets/img/competition/competition-closed.jpg';
import { COMPETITION_IMAGE } from '../../constants/index';
import BlogPageMetaTags from '../blogPage/BlogPageMetaTags';

class CompetitionPage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Fragment>
        <BlogPageMetaTags
          keywords="FIFA, eWorld Cup, Head 2 Head Freestyle, Competition, O2, Mixtape Madness, #FIFAFreestyle, #FIFAeWorldCup"
          postTitle="FIFA eWorld Cup x Mixtape Madness - Head 2 Head Freestyle Competition"
          description="FIFA and Mixtape Madness have teamed up to give 4 lucky artists a chance to battle it out on stage in the ultimate freestyle competition, live at the O2 arena in front of an audience of 2,000+ at the FIFA eWorld Cup Final."
          image={COMPETITION_IMAGE}
        />
        <div className="competition-page">
          <div
            className="competition-page__header"
            style={{
              backgroundImage: `url(${fifaHead2Head})`,
            }}
          />
          <Page>
            <div className="competition-page__content">
              <div className="competition-page__rules">
                <h1>Competition Closed!</h1>
                <div className="competition-page__intro">
                  <p>If chosen you will need to attend a content day on 25th July and then the live final on 4th August.</p>
                </div>
              </div>
            </div>
          </Page>
        </div>
      </Fragment>
    );
  }
}

export default CompetitionPage;
