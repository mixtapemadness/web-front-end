/* eslint operator-linebreak: 0 */
/* eslint implicit-arrow-linebreak: 0 */
/* eslint arrow-body-style: 0 */
/* eslint no-unused-vars: 0 */

import React from 'react'
import styled from 'styled-components'
import WhatsOnComponent from 'components/whatsOnComponent'
import whatsOnEnhancer from './whatsOnEnhancer'

const Container = styled.div`
  width: 100%;
  margin: 40px auto;
`

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  ${p => p.mb && `margin-bottom: ${p.mb}px`};
`

const SectionHeader = styled.span`
  font-weight: 600;
  font-size: 28px;
`

const SectionSubHeader = styled.span`
  font-size: 17.5px;
  letter-spacing: 1.1px;
  font-weight: 600;
`

const WhatsOnItemsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  @media only screen and (max-width: 850px) {
    /* flex-direction:column; */
  }
`

const WhatsOn = ({ width, data }) => {
  const Posts = data && data.Posts && data.Posts
  // const posts = data && data.Posts && data.Posts
  return (
    <Container>
      <HeaderContainer mb={60}>
        <SectionHeader>What&apos;s On</SectionHeader>
        <SectionSubHeader>
          {' '}
          Check Out The Latest Music And News This Week
        </SectionSubHeader>
      </HeaderContainer>
      <WhatsOnItemsContainer>
        {Posts &&
          Posts.map(item => (
            <WhatsOnComponent
              mediaId={item.featured_media}
              item={item}
              key={item.id}
            />
          ))}
      </WhatsOnItemsContainer>
      {/* <FlexDiv jc="space-between" mb={33}>
        {whatsOnVideos.map(item => (
          <WhatsOnComponent data={item} key={item.id} />
        ))}
      </FlexDiv>
      <FlexDiv jc="space-between">
        {whatsOnData.map(item => (
          <WhatsOnComponent data={item} key={item.id} />
        ))}
      </FlexDiv> */}
    </Container>
  )
}

export default whatsOnEnhancer(WhatsOn)
