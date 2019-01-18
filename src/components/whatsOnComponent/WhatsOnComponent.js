/* eslint no-unused-vars: 0 */
/* eslint arrow-body-style: 0 */
/* eslint react/jsx-wrap-multilines: 0 */
/* eslint indent: 0 */
/* eslint operator-linebreak: 0 */

import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import ReactImageFallback from 'react-image-fallback';
import whatsOnComponentEnhancer from './whatsOnComponentEnhancer';
import placeholderImg from '../../resources/assets/img/placeholderImg.jpg';

const Container = styled.div`
  margin: 7px;
  display: flex;
  flex-direction: column;
`;

const PhotoContainer = styled(Link)`
  width: 100%;
  height: 200px;
  width: 100%;
  background: url(${props => props.img});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  transition: 0.8s;
  cursor: pointer;

  @media only screen and (max-width: 1150px) {
    height: 300px;
    background-size: cover;
    &:hover {
      background-size: cover;
    }
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const ContentContainer = styled.div`
  background-color: #eeeeef;
  width: 100%;
  padding: 20px 15px;
  display: flex;
  flex-direction: column;
`;

const Icon = styled.img`
  display: block;
  position: absolute;
  cursor: pointer;
  top: 50%;
  left: 50%;
`;

const LeftSide = styled.div`
  display: block;
`;

const Category = styled(Link)`
  color: #ff9600;
  margin: 0 5px;
  cursor: pointer;
`;

const CategoryContainer = styled.div`
  width: 100%;
  color: #000;
  display: flex;
  flex-wrap: wrap;
  font-weight: 800;
  font-size: 12px;
  margin-bottom: 10px;
`;

const BottomContent = styled.span`
  display: flex;
  flex-direction: column;
`;

const Name = styled(Link)`
  font-size: 18px;
  color: black;
  font-weight: 800;
  text-decoration: underline;
  text-decoration-color: transparent;
  height: 5ch;
  overflow: hidden;
  transition: 0.4s;
  &:hover {
    text-decoration-color: #111111;
  }
`;
const RightSide = styled.div`
`;
const Text = styled.span`
  height: 5ch;
  overflow: hidden;
  color: #666666;
  font-size: 14px;
  word-break: break-word;
`;
const FlexDiv = styled.div`
  display: flex;
  ${p => p.mb && `margin-bottom: ${p.mb}px`};
  ${p => p.mt && `margin-top: ${p.mt}px`};
  ${p => p.ml && `margin-left: ${p.ml}px`};
  ${p => p.mr && `margin-right: ${p.mr}px`};
  ${p => p.jc && `justify-content: ${p.jc}`};
  ${p => p.width && `width: ${p.width}`};
`;

const Span = styled.span`
  color: #666666;
  font-size: 13px;
  margin-left: 10px;
  margin-top: 2px;
`;
const Img = styled.img`
  ${p => p.height && `height: ${p.height}px`};
`;
const WhatsOnComponent = ({ media, data, category }) => {
  const Image =
    media && media.img && media.img.featured_image && media.img.featured_image;
  const CategoriesData = category && category.category && category.category;
  return (
    <Container>
      <PhotoContainer
        img={Image}
        to={{
          pathname:
            data &&
            CategoriesData &&
            `/blog/${CategoriesData[0].slug}/${data.slug}`,
        }}
      >
        <ReactImageFallback
          src={Image && Image}
          fallbackImage={placeholderImg}
          initialImage={placeholderImg}
        />
      </PhotoContainer>
      <ContentContainer>
        <CategoryContainer>
          {CategoriesData &&
            CategoriesData.filter(item => item.name === 'Events').map(item => (
              <Category key={item.id} to={`/blog/category/${item.slug}`}>
                {item.name}
              </Category>
            ))}
        </CategoryContainer>
        <BottomContent>
          <LeftSide>
            {CategoriesData &&
              data && (
                <Name
                  dangerouslySetInnerHTML={{ __html: data.title }}
                  to={`/blog/${CategoriesData[0].slug}/${data.slug}`}
                />
              )}
          </LeftSide>
          <RightSide>
            {CategoriesData &&
              data && (
                <Text
                  to={`/blog/${CategoriesData[0].slug}/${data.slug}`}
                  dangerouslySetInnerHTML={{ __html: data.excerpt }}
                />
              )}
          </RightSide>
        </BottomContent>
      </ContentContainer>
    </Container>
  );
};

export default whatsOnComponentEnhancer(WhatsOnComponent);
