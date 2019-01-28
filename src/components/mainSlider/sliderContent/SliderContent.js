/* eslint react/no-array-index-key: 0 */
/* eslint object-curly-newline: 0 */
/* eslint react/jsx-wrap-multilines: 0 */
/* eslint operator-linebreak: 0 */
/* eslint indent: 0 */
/* eslint no-unused-vars: 0 */

import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { CardLoader } from 'components/loaders';
import mainSliderEnhancer from './sliderContentEnhancer';
import { RESPONSIVE_BREAKPOINTS } from '../../../constants';

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
`;

const SliderWrapper = styled.span`
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  background: -moz-linear-gradient(
    top,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 1) 100%
  );
  background: -webkit-linear-gradient(
    top,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 1) 100%
  );
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 1) 100%
  );
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#00000000', endColorstr='#a6000000',GradientType=0 );
`;

const Header = styled.span`
  font-size: 14px;
  line-height: 26px;
  font-weight: bold;
  color: white;
  position: relative;
  
  &:hover{
   text-decoration: underline;
  }
  @media only screen and (min-width: ${RESPONSIVE_BREAKPOINTS.tablet}) {
    font-size: 20px;
  }
  @media only screen and (min-width: ${RESPONSIVE_BREAKPOINTS.desktop}) {
    font-size: 40px;
    line-height: 48px;
  }
`;
const CategoryTitle = styled.span`
  font-size: 14px;
  @media only screen and (min-width: ${RESPONSIVE_BREAKPOINTS.desktop}) {
      font-size: 24px;
  }
  color: #ffa019;
  &:hover{
   text-decoration: underline;
  }
`;

const FlexDiv = styled.div`
  position: relative;
  align-items: center;
  text-align: center;
  margin: auto;
  width: 60%;
  height: 100%;
  justify-content: flex-end;
  display: flex;
  flex-direction: column;
  padding-bottom: 100px;
`;

const MainSlider = ({ tags, media, category, data }) => {
  const Image = media && media.img && media.img.full && media.img.full;
  const CategoriesData = category && category.category;
  const postLink =
    CategoriesData && `blog/${CategoriesData[0].slug}/${data.slug}`;
  if (!Image) {
    return <CardLoader height={600} />;
  }

  if (data && CategoriesData) {
    return (
      <Link to={postLink}>
        <SliderContent SliderPhoto={Image}>
          <SliderWrapper />
          <FlexDiv>
            <CategoryTitle>
              {CategoriesData[0].name}
            </CategoryTitle>
            <Header dangerouslySetInnerHTML={{ __html: data.title }} />
          </FlexDiv>
        </SliderContent>
      </Link>
    );
  }

  return null;
};

export default mainSliderEnhancer(MainSlider);
