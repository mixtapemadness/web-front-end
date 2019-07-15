/* eslint react/no-unescaped-entities: 0 */
import React from 'react';
import styled from 'styled-components';
import Page from '../Page';

const Heading = styled.h1`
  font-weight: 800;
  text-align: left;
  margin-bottom: 15px;
`;

const CompetitionTerms = () => (
  <Page>
    <Heading>FIFA eWorld Cup Terms & Conditions</Heading>
    <p>
      These terms and conditions outline the rules and regulations for the use
      of Mixtape Madness's Website. By accessing this website, we assume you
      accept these terms and conditions in full. Do not continue to use Mixtape
      Madness's website if you do not accept all of the terms and conditions
      stated on this page.
    </p>
  </Page>
);

export default CompetitionTerms;
