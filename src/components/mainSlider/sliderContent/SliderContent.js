/* eslint react/no-array-index-key: 0 */
/* eslint object-curly-newline: 0 */
/* eslint react/jsx-wrap-multilines: 0 */
/* eslint operator-linebreak: 0 */
/* eslint indent: 0 */
/* eslint no-unused-vars: 0 */

import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import mainSliderEnhancer from './sliderContentEnhancer'

const SliderContent = styled.div`
  height: 540px;
  background-image: url(${p => p.SliderPhoto});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  text-align: center;
  position: relative;
`

const SliderWrapper = styled.span`
  position: absolute;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.4);
  left: 0;
`

const Header = styled.span`
  font-size: 40px;
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
  font-size: 15.5px;
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

const FlexDiv = styled.div`
  width: 100%;
  align-items: center;
  text-align: center;
  height: 100%;
  justify-content: center;
  display: flex;
  flex-direction: column;
`

const MainSlider = ({ tags, media, category, data }) => {
  const Image = media && media.img && media.img.full && media.img.full
  const CategoriesData = category && category.category && category.category
  const tagsData = tags && tags.tags && tags.tags
  return (
    <React.Fragment>
      {Image &&
        data &&
        tagsData &&
        tagsData.length > 0 &&
        tagsData[0] &&
        CategoriesData &&
        CategoriesData.length > 0 &&
        CategoriesData[0] &&
        CategoriesData[0].name && (
          <SliderContent SliderPhoto={Image}>
            <SliderWrapper />
            <FlexDiv>
              <Header dangerouslySetInnerHTML={{ __html: data.title }} />
              <LatestSingles to={`blog/${CategoriesData[0].slug}/${data.slug}`}>
                Read More
              </LatestSingles>
            </FlexDiv>
          </SliderContent>
        )}
    </React.Fragment>
  )
}

export default mainSliderEnhancer(MainSlider)
