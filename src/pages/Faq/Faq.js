import React from 'react';
import Page from '../Page';
import Accordion from '../../components/Accordion/Accordion';

const Faq = () => (
  <Page classNames="faq-page">
    <h1>Frequently Asked Questions</h1>
    <p>Below you will find the answers to all the questions we get asked on a daily basis.</p>
    <Accordion />
  </Page>
);

export default Faq;
