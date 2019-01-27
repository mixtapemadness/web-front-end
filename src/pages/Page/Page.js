import React from 'react';

const Page = ({ children }) => (
  <div className="page">
    <div className="page__container">
      {children}
    </div>
  </div>
);

export default Page;
