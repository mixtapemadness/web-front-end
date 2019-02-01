import React from 'react';

const Page = ({ children, classNames = '' }) => (
  <div className={`page ${classNames}`}>
    <div className="page__container">
      {children}
    </div>
  </div>
);

export default Page;
