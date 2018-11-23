/* eslint no-unused-vars: 0 */
/* eslint react/jsx-curly-brace-presence: 0 */
/* eslint operator-linebreak: 0 */
/* eslint object-curly-newline: 0 */

import React from 'react'
import styled from 'styled-components'
import window from 'global/window'

import { Link } from 'react-router-dom'
import SignalBarsIcon from 'resources/assets/svgComponents/SignalBars'
import ViewsIcon from 'resources/assets/svgComponents/Views'
import GetCategory from 'components/getCategory'
import { CLOSE_MEGAMENU } from 'constants'
import ReactImageFallback from 'react-image-fallback'
import menuItemEnhancer from './menuItemEnhancer'
import eventEmitter from '../../eventEmitter'
import placeholderImg from '../../resources/assets/img/placeholderImg.jpg'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  @media only screen and (max-width: 850px) {
    margin-top: 10px;
  }
  @media only screen and (max-width: 1050px) {
    text-align: center;
  }
`

const MenuItemPhoto = styled(Link)`
  width: 260px;
  height: 170px;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`

const Category = styled(Link)`
  color: #ff9600;
  cursor: pointer;
  color: ${props => (props.color ? props.color : '#e68600')};
  font-weight: 800;
  text-align: left;
  width: 100%;
`

const PostTitle = styled(Link)`
  width: 100%;
  font-weight: 800;
  font-size: 16px;
  line-height: 1.3;
  text-decoration: underline;
  text-decoration-color: transparent;
  color: #ffffff;
  transition: 0.4s;
  &:hover {
    text-decoration-color: #ffffff;
  }
`

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 260px;
  flex: 1;
  margin: 10px 0;
  @media only screen and (max-width: 1050px) {
    text-align: center;
  }
`
const ContentContainerTop = styled.div`
  display: flex;
  flex-direction: column;
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

const ContinueRead = styled(Link)`
  width: auto;
  color: ${p => (p.color ? p.color : '#ff9600')};
  cursor: pointer;
  font-weight: 800;
  font-size: 12px;
  transition: 0.4s;
  margin-top: 10px;
  &:hover {
    opacity: 0.8;
  }
  &:after {
    width: 100%;
    height: 10px;
    background: #ff9600;
  }
`

const MenuItem = ({ data, media, category, tags }) => {
  // const data = Posts && Posts.data

  const Image = media && media.img && media.img.full && media.img.full

  const categorySlug =
    category &&
    category.category &&
    category.category &&
    category.category[0] &&
    category.category[0].id &&
    category.category[0].name

  const tagsData = tags && tags.tags && tags.tags

  return (
    <Container>
      <MenuItemPhoto
        to={{
          pathname: `/blog/${categorySlug && categorySlug}/${data.slug}`,
          state: {
            prevPath: window.location && window.location.pathname,
          },
        }}
        onClick={() => eventEmitter.emit(CLOSE_MEGAMENU)}
        // src={Image && Image}
      >
        <ReactImageFallback
          src={Image && Image}
          fallbackImage={placeholderImg}
          initialImage={placeholderImg}
        />
      </MenuItemPhoto>

      <ContentContainer>
        <ContentContainerTop>
          {/* {categories &&
            categories.map(item => (
              <GetCategory
                color={'#4f4f4f'}
                // key={data.categories}
                id={data.categories}
              />

            ))} */}
          <Category
            to={`/blog/${categorySlug && categorySlug}/${data.slug}`}
            color={'#4f4f4f'}
            dangerouslySetInnerHTML={{ __html: categorySlug && categorySlug }}
            onClick={() => eventEmitter.emit(CLOSE_MEGAMENU)}
          />
          <Type dangerouslySetInnerHTML={{ __html: data.type }} />
          <PostTitle
            to={`/blog/${categorySlug && categorySlug}/${data.slug}`}
            onClick={() => eventEmitter.emit(CLOSE_MEGAMENU)}
            dangerouslySetInnerHTML={{ __html: data.title }}
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
        </ContentContainerTop>
        <ContinueRead
          color={'#ffffff'}
          to={`/blog/${categorySlug && categorySlug}/${data.slug}`}
          onClick={() => eventEmitter.emit(CLOSE_MEGAMENU)}
        >
          Continue Read
        </ContinueRead>
      </ContentContainer>
    </Container>
  )
}
export default menuItemEnhancer(MenuItem)
