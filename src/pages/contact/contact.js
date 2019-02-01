import React from 'react';
import Page from '../Page';
import { CONTACT_DETAILS } from '../../constants';

const Contact = () => (
  <Page classNames="contact-page">
    <h1>Contact Us</h1>
    <p>
      Feel free to get in touch about the following:
    </p>
    <div>

      <div>
        <h2>General Enquires</h2>
        <p><a href={`mailto:${CONTACT_DETAILS.generalEnquires}`}>{CONTACT_DETAILS.generalEnquires}</a></p>
      </div>

      <div>
        <h2>Marketing Enquires</h2>
        <p><a href={`mailto:${CONTACT_DETAILS.generalEnquires}`}>{CONTACT_DETAILS.generalEnquires}</a></p>
      </div>


      <div>
        <h2>Music/Video Submissions</h2>
        <p><a href={`mailto:${CONTACT_DETAILS.submissionsEmail}`}>{CONTACT_DETAILS.submissionsEmail}</a></p>
      </div>

      <div>
        <h2>Producers</h2>
        <p><a href={`mailto:${CONTACT_DETAILS.producersEmail}`}>{CONTACT_DETAILS.producersEmail}</a></p>
      </div>


    </div>
  </Page>
);

export default Contact;
