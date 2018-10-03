/* eslint no-unused-vars: 0 */
/* eslint arrow-body-style: 0 */
/* eslint react/jsx-wrap-multilines: 0 */
/* eslint indent: 0 */
/* eslint operator-linebreak: 0 */

import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import whatsOnComponentEnhancer from './whatsOnComponentEnhancer'

const Container = styled.div`
  flex: 1 0 575px;
  margin: 7px;
  display: flex;
  flex-direction: column;
  @media only screen and (max-width: 1190px) {
    align-items: center;
    margin: 10px;
    flex: 0 1 475px;
  }
  @media only screen and (max-width: 850px) {
    /* flex: 0 1 375px; */
  }
  /* @media only screen and (max-width: 450px) {
    flex: 0 1 300px;
  } */
`

// width: 100%;
// height: 200px;
// width: 100%;
// height: 200px;
// background: url(${props => props.img});
// background-repeat: no-repeat;
// background-size: cover;
// background-position: center;
// @media only screen and (max-width: 1150px) {
//   height: 300px;
// }

const PhotoContainer = styled(Link)`
  width: 100%;
  height: 200px;
  width: 100%;
  height: 200px;
  background: url(${props => props.img});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  transition: 0.8s;
  cursor: pointer;
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
  display: flex;
  flex-direction: column;
  flex: 1;
  box-sizing: content-box;
  @media only screen and (max-width: 850px) {
    height: auto;
  }
`

const Icon = styled.img`
  display: block;
  position: absolute;
  cursor: pointer;
  top: 50%;
  left: 50%;
`

const LeftSide = styled.div`
  width: calc(40% - 15px);
  display: flex;
  flex-direction: column;
`

const Category = styled(Link)`
  color: #ff9600;
  margin: 0 5px;
  cursor: pointer;
`

const CategoryContainer = styled.div`
  width: 100%;
  color: #000;
  display: flex;
  flex-wrap: wrap;
  font-weight: 800;
  font-size: 12px;
  margin-bottom: 10px;
`

const BottomContent = styled.span`
  display: flex;
`

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
`
const Line = styled.div`
  height: 100%;
  width: 1px;
  background-color: #e7e7e7;
  margin: 0px 15px;
`
const RightSide = styled.div`
  display: flex;
  flex-direction: column;
  width: calc(60% - 15px);
`
const Text = styled.span`
  height: 5ch;
  overflow: hidden;
  color: #666666;
  font-size: 14px;
  word-break: break-word;
`
const FlexDiv = styled.div`
  display: flex;
  ${p => p.mb && `margin-bottom: ${p.mb}px`};
  ${p => p.mt && `margin-top: ${p.mt}px`};
  ${p => p.ml && `margin-left: ${p.ml}px`};
  ${p => p.mr && `margin-right: ${p.mr}px`};
  ${p => p.jc && `justify-content: ${p.jc}`};
  ${p => p.width && `width: ${p.width}`};
`

const Span = styled.span`
  color: #666666;
  font-size: 13px;
  margin-left: 10px;
  margin-top: 2px;
`
const Img = styled.img`
  ${p => p.height && `height: ${p.height}px`};
`

// const Categories = ({ data }) => {
//   let newData
//   data && data.length > 0
//     ? (newData = data.map((item, index) => {
//       if (index > 0) {
//         return (
//           <React.Fragment>
//             ,<Category to={`/blog/category/${item.slug}`}>{item.name}</Category>
//           </React.Fragment>
//         )
//       }
//       return <Category to={`/blog/category/${item.slug}`}>{item.name}</Category>
//     }))
//     : (newData = null)
//   return newData
// }

const WhatsOnComponent = ({ media, data, category }) => {
  const Image = media && media.img && media.img.full && media.img.full
  const CategoriesData = category && category.category && category.category

  return (
    <Container>
      {CategoriesData &&
        data && (
          <PhotoContainer
            img={Image}
            to={`/blog/${CategoriesData[0].slug}/${data.slug}`}
          />
        )}
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
          <Line />
          <RightSide>
            {CategoriesData &&
              data && (
                <Text
                  to={`/blog/${CategoriesData[0].slug}/${data.slug}`}
                  dangerouslySetInnerHTML={{ __html: data.excerpt }}
                />
              )}
            {/* <FlexDiv mt={18}>
            <FlexDiv jc="space-between" width="100%">
              <FlexDiv>
                <Img src={ViewsIcon} alt="view" height={20} />
                <Span mt={2} ml={10}>
                  {data.views}
                  {' Views'}
                </Span>
              </FlexDiv>
              <Img src={SignalBarsIcon} alt="bars" height={18} />
            </FlexDiv>
          </FlexDiv> */}
          </RightSide>
        </BottomContent>
      </ContentContainer>
    </Container>
  )
}

export default whatsOnComponentEnhancer(WhatsOnComponent)
