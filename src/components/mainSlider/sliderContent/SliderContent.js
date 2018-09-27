/* eslint react/no-array-index-key: 0 */
/* eslint object-curly-newline: 0 */
/* eslint react/jsx-wrap-multilines: 0 */
/* eslint operator-linebreak: 0 */

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
`
const Header = styled.span`
  font-size: 40px;
  font-weight: bold;
  color: white;
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
  border: solid 1.5px #ffa019;
  background: transparent;
  color: #ffffff;
  font-weight: 600;
  border-radius: 25px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
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
  console.log('CategoriesData', CategoriesData)
  const tagsData = tags && tags.tags && tags.tags
  console.log('tagsData', tagsData)

  return (
    <React.Fragment>
      {Image &&
        data &&
        tagsData &&
        CategoriesData &&
        CategoriesData.length > 0 &&
        CategoriesData[0] &&
        CategoriesData[0].name && (
          <SliderContent SliderPhoto={Image}>
            <FlexDiv>
              <Header dangerouslySetInnerHTML={{ __html: data.title }} />
              <Span>Mixtape Madness</Span>
              <LatestSingles to={`blog/${CategoriesData[0].slug}/${data.slug}`}>
                {tagsData[0].name}
              </LatestSingles>
            </FlexDiv>
          </SliderContent>
        )}
    </React.Fragment>
  )
}

export default mainSliderEnhancer(MainSlider)
