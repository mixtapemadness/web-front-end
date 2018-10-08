/* eslint no-unused-vars: 0 */
/* eslint object-curly-newline: 0 */
/* eslint indent: 0 */
/* eslint operator-linebreak: 0 */

import React from 'react'
import styled from 'styled-components'

import PlayIcon from 'resources/assets/svg/Play.svg'
import ViewsIcon from 'resources/assets/svg/eye.svg'
import SignalBarsIcon from 'resources/assets/svg/signal-bars.svg'
import DotsIcon from 'resources/assets/svg/dots.svg'
import { Link } from 'react-router-dom'
import LazyLoad from 'react-lazyload'
import videoEnhancer from './videoEnhancer'

const Container = styled.div`
  margin: 7px;
  flex: 1;
`

const PhotoContainer = styled(Link)`
  display: block;
  width: 100%;
  height: 200px;
  background: url(${props => props.picture});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  position: relative;
  cursor: pointer;
  background-size: cover;
  transition: 0.8s;
  &:hover {
    /* background-size: 140%; */
  }
  @media only screen and (max-width: 1150px) {
    height: 300px;
    background-size: cover;
    &:hover {
      background-size: cover;
    }
  }
`

const ContentContainer = styled.div`
  background-color: #eeeeef;
  width: calc(100% - 30px);
  padding: 20px 15px;
  height: 160px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-sizing: content-box;
`

const Icon = styled.img`
  display: block;
  position: absolute;
  cursor: pointer;
  top: 50%;
  left: 50%;
  height: 30px;
`

const Dots = styled.img`
  display: block;
  position: absolute;
  cursor: pointer;
  bottom: 10px;
  right: 10px;
  height: 22px;
`

const LeftSide = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-between;
`

const RightSide = styled.div`
  display: flex;
  flex-direction: column;
`

const FlexDiv = styled.div`
  display: flex;
  width: 100%;
  ${p => p.jc && `justify-content: ${p.jc}`};
  ${p => p.align && `align-items: ${p.align}`};
  ${p => p.height && `height: ${p.height}`};
`

const Img = styled.img`
  ${p => p.height && `height: ${p.height}px`};
`

const Name = styled(Link)`
  font-weight: 600;
  font-size: 19.5px;
  letter-spacing: 1.2px;
  line-height: 1.08;
  margin-bottom: 16px;
  text-decoration: underline;
  text-decoration-color: transparent;
  transition: 0.4s;
  cursor: pointer;
  &:hover {
    text-decoration-color: #111111;
  }
`
const Text = styled.span`
  color: #666666;
  word-break: break-word;
  font-size: 14.5px;
  line-height: 1.45;
  letter-spacing: 0.9px;
  margin-right: 10px;
`

const Views = styled.span`
  font-size: 12.5px;
  letter-spacing: 0.8px;
  color: #666666;
  margin-left: 7px;
`

const TagsContainer = styled.span`
  display: flex;
`

const Video = ({ data, media, tags, category }) => {
  const categoriesData = category && category.category && category.category
  const tagsData = tags && tags.tags && tags.tags
  const Image =
    media && media.img && media.img.featured_image && media.img.featured_image
  // const CategoriesData = category && category.category && category.category
  return (
    <Container>
      {categoriesData &&
        data &&
        Image && (
          <LazyLoad>
            <PhotoContainer
              picture={Image}
              to={`/blog/${categoriesData[0].slug}/${data.slug}`}
            />
          </LazyLoad>
        )}
      <ContentContainer>
        <LeftSide>
          {data &&
            categoriesData && (
              <Name
                dangerouslySetInnerHTML={{ __html: data.title }}
                to={`/blog/${categoriesData[0].slug}/${data.slug}`}
              />
            )}
          <TagsContainer>
            {tagsData &&
              tagsData.map(item => (
                <Text
                  key={item.id}
                  dangerouslySetInnerHTML={{ __html: item.name }}
                />
              ))}
          </TagsContainer>
        </LeftSide>
        <RightSide>
          {/* <FlexDiv>
            <Img src={ViewsIcon} alt="view" height={20} />
            <Views>
              {data.views}
              {' Views'}
            </Views>
          </FlexDiv> */}
          {/* <FlexDiv jc="flex-end" height="100%" align="flex-end">
            <Img src={SignalBarsIcon} alt="bars" height={18} />
          </FlexDiv> */}
        </RightSide>
      </ContentContainer>
    </Container>
  )
}

export default videoEnhancer(Video)
