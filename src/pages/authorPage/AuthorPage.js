/* eslint no-unused-vars: 0 */

import React from 'react';
import styled from 'styled-components';

import ProfileInfo from 'components/profileInfo';

import ResentPosts from './ResentPosts';
import authorPageEnhancer from './authorPageEnhancer';
import Page from '../Page/Page';


const LineSeparator = styled.div`
  width: 100%;
  margin-top: 30px;
  height: 1px;
  background: #e0e0e0;
`;

const AuthorPage = ({ width, data }) => {
  const userData = data && data.user && data.user;
  const userId = data && data.user && data.user.id;
  const loading = data && data.loading && data.loading;
  return (
    <Page>
      <ProfileInfo data={userData} />
      <LineSeparator />
      <ResentPosts loading={loading} id={userId} />
    </Page>
  );
};

export default authorPageEnhancer(AuthorPage);
