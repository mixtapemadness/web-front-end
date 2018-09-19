/* eslint react/jsx-curly-brace-presence: 0 */
/* eslint no-unused-vars: */

import React from 'react'
import styled from 'styled-components'

const SectionContainer = styled.span`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
`

const SectionHead = styled.span`
  padding: 0 15px;
  margin-bottom: 10px;
`

const Title = styled.h1``

const SubTitle = styled.h4``

const SubTitleTxt = styled.span`
  color: #666666;
`

const SectionContent = styled.span`
  width: 100%;
`

const MusicSection = ({ title, children }) => (
  <SectionContainer>
    <SectionHead>
      <Title size={'36px'}>
        Secure The Bag!
        {/* title */}
      </Title>
      <SubTitle>
        By <SubTitleTxt color={'#666666'}>AJ Tracey</SubTitleTxt>
      </SubTitle>
    </SectionHead>

    <SectionContent>{children}</SectionContent>
  </SectionContainer>
)

export default MusicSection
