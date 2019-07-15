import React from 'react';
import Button from '../../components/Button/Button';
import { COMPETITION_DOWNLOAD_URL, COMPETITION_HASHTAG_URL } from '../../constants/index';

const DownloadForm = ({ handleOnClickGoBack }) => (
  <div className="competition-page__download">
    <i className="fas fa-cloud-download-alt fa-4x" />
    <h3 className="competition-page__download-title">Thank you for registering your email. Click below to download the beat.</h3>
    <p>Once you have recorded your freestyle, please post on your Instagram using the hashtag <a href={COMPETITION_HASHTAG_URL} target="_blank" rel="noopener noreferrer">#Head2HeadFreestyle</a>.</p>
    <a href={COMPETITION_DOWNLOAD_URL} rel="noopener noreferrer" target="_blank" className="btn btn--primary competition-page__download-btn">Download Beat</a>
    <Button secondary onClick={handleOnClickGoBack}>Go Back</Button>
  </div>
);

export default DownloadForm;
