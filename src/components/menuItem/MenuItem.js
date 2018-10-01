/* eslint no-unused-vars: 0 */
/* eslint react/jsx-curly-brace-presence: 0 */
/* eslint operator-linebreak: 0 */

import React from 'react'
import styled from 'styled-components'

import SignalBarsIcon from 'resources/assets/svgComponents/SignalBars'
import ViewsIcon from 'resources/assets/svgComponents/Views'

import GetCategory from 'components/getCategory'
import ContinueRead from 'components/continueRead'
import PostTitle from 'components/postTitle'
import MenuItemPhoto from './menuItemPhoto'

const Container = styled.div`
  @media only screen and (max-width: 850px) {
    margin-top: 10px;
  }
  @media only screen and (max-width: 1050px) {
    text-align: center;
  }
`

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 260px;
  margin: 10px 0;
  @media only screen and (max-width: 1050px) {
    text-align: center;
  }
`

const Type = styled.span`
  font-size: 9.5px;
  letter-spacing: 0.6px;
  color: #ffffff;
`
const Title = styled.span`
  font-size: 20px;
  letter-spacing: 1.2px;
  font-weight: 600;
  color: #ffffff;
  height: 120px;
`

const FlexDiv = styled.div`
  display: flex;
  justify-content: space-between;
`
const ViewsContainer = styled.div`
  display: flex;
  color: #ffffff;
  align-items: center;
`

const Span = styled.span`
  color: #ffffff;
  font-size: 8.5px;
  margin-left: 7px;
`

const MenuItem = Posts => {
  const data = Posts && Posts.data
  const categories = data && data.categories
  return (
    <Container>
      <MenuItemPhoto id={data.featured_media} />
      {categories &&
        categories.map(item => (
          <GetCategory
            color={'#4f4f4f'}
            // key={data.categories}
            id={data.categories}
          />
        ))}
      <ContentContainer>
        <Type dangerouslySetInnerHTML={{ __html: data.type }} />
        <PostTitle
          fontSize={'16px'}
          title={data.title}
          categoryId={categories}
          PostSlug={data.slug}
          color={'#ffffff'}
        />
        {/* <Title dangerouslySetInnerHTML={{ __html: data.title }} /> */}
        {/* <FlexDiv>
        <ViewsContainer>
          <ViewsIcon color="#ffffff" height="20px" />
          <Span>
            {data.views}
            {' Views'}
          </Span>
        </ViewsContainer>
        <SignalBarsIcon color="#ffffff" height="13px" />
      </FlexDiv> */}
        <ContinueRead
          color={'#ffffff'}
          categoryId={categories}
          PostSlug={data.slug}
        />
      </ContentContainer>
    </Container>
  )
}
export default MenuItem
