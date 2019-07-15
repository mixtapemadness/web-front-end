import React from 'react';
import Button from '../../components/Button/Button';
import { COMPETITION_DOWNLOAD_URL } from '../../constants/index';

const DownloadForm = ({ handleOnClickGoBack }) => (
  <div className="competition-page__download">
    <i className="fas fa-cloud-download-alt fa-4x" />
    <h3 className="competition-page__download-title">Thank you for registering your email. Click below to download.</h3>
    <p>Once you have recorded your freestyle, please email it to us at competition@mixtapemadness.com</p>
    <a href={COMPETITION_DOWNLOAD_URL} rel="noopener noreferrer" target="_blank" className="btn btn--primary competition-page__download-btn">Download Beat</a>
    <Button secondary onClick={handleOnClickGoBack}>Go Back</Button>
  </div>
);

export default DownloadForm;
