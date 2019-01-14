/* eslint react/no-array-index-key: 0 */
/* eslint object-curly-newline: 0 */
/* eslint react/jsx-wrap-multilines: 0 */
/* eslint operator-linebreak: 0 */
/* eslint indent: 0 */
/* eslint no-unused-vars: 0 */

import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import CardLoader from 'components/loaders'
import ReactImageFallback from 'react-image-fallback'
import mainSliderEnhancer from './sliderContentEnhancer'
import placeholderImg from '../../../resources/assets/img/placeholderImg.jpg'
import { RESPONSIVE_BREAKPOINTS } from '../../../constants'

const SliderContent = styled.div`
  height: 400px;
  @media only screen and (min-width: ${RESPONSIVE_BREAKPOINTS.tablet}) {
    height: 600px;
  }
  background-image: url(${p => p.SliderPhoto});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  text-align: center;
  position: relative;
  img {
    width: 100%;
    height: 100%;
    position: absolute;
  }
`

const SliderWrapper = styled.span`
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  background: -moz-linear-gradient(
    top,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 0.65) 100%
  );
  background: -webkit-linear-gradient(
    top,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 0.65) 100%
  );
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 0.65) 100%
  );
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#00000000', endColorstr='#a6000000',GradientType=0 );
`

const Header = styled.span`
  font-size: 30px;
  line-height: 40px;
  font-weight: bold;
  color: white;
  position: relative;
  @media only screen and (max-width: 950px) {
    font-size: 30px;
  }
  @media only screen and (max-width: 850px) {
    font-size: 20px;
  }
  @media only screen and (max-width: 450px) {
    font-size: 14px;
  }
`

const Span = styled.span`
  font-size: 70px;
  font-weight: bold;
  color: white;
  @media only screen and (max-width: 950px) {
    font-size: 60px;
  }
  @media only screen and (max-width: 740px) {
    font-size: 45px;
  }
  @media only screen and (max-width: 850px) {
    font-size: 30px;
  }
  @media only screen and (max-width: 450px) {
    font-size: 16px;
  }
`

const LatestSingles = styled(Link)`
  letter-spacing: 0.9px;
  width: 189px;
  height: 40px;
  margin-top: 40px;
  background: #ffa019;
  color: #ffffff;
  font-weight: 600;
  border-radius: 25px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`

const CategoryTitle = styled(Link)`
  font-size: 14px;
  color: #ffa019;
`

const FlexDiv = styled.div`
  width: 60%;
  position: relative;
  align-items: center;
  text-align: center;
  margin: auto;
  height: 100%;
  justify-content: flex-end;
  display: flex;
  flex-direction: column;
  padding-bottom: 100px;
`

const MainSlider = ({ tags, media, category, data }) => {
  const Image = media && media.img && media.img.full && media.img.full
  const CategoriesData = category && category.category
  const tagsData = tags && tags.tags && tags.tags
  const postLink =
    CategoriesData && `blog/${CategoriesData[0].slug}/${data.slug}`

  if (data && CategoriesData) {
    return (
      <Link to={postLink}>
        <SliderContent SliderPhoto={Image}>
          <SliderWrapper />
          <FlexDiv>
            <CategoryTitle to={`blog/category/${CategoriesData[0].slug}`}>
              {CategoriesData[0].name}
            </CategoryTitle>
            <Header dangerouslySetInnerHTML={{ __html: data.title }} />
            <LatestSingles to={postLink}>Read More</LatestSingles>
          </FlexDiv>
        </SliderContent>
      </Link>
    )
  }

  return null
}

export default mainSliderEnhancer(MainSlider)
