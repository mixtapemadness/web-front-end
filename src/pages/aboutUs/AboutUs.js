import React from 'react';
import aboutUsEnhancer from './aboutUsEnhancer';
import Page from '../Page';

const AboutUs = () => (
  <Page>
    <h1>About Us</h1>
    <div>
      <p>Mixtape Madness started as a passion project between a few young friends
      to help young people on their estate digitally share their music. This blos-
        somed into being labelled by young people as <b>Mixtape Madness</b>. The slang phrase was
      adopted as the companys name as many across the land
      dubbed the platform as the UK alternative to DatPiff and the home of UK
      mixtapes.
      </p>

      <p>It has grown into a music discovery platform that has become paramount
      infrastructure for empowering emerging artists within the urban music
      scene. Having played a leading role in music discovery, talent acquisition
      and content curation for UK artists, they are now thoroughly woven into
      the fabric of UK urban youth culture. In recent times this has been show-
      cased via talents such as M Huncho, SL, Deno, EO, J Hus and Headie One at
      the early stages of their careers.
      </p>
    </div>
  </Page>
);

export default aboutUsEnhancer(AboutUs);
