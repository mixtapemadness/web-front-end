/* eslint react/jsx-one-expression-per-line: 0 */
/* eslint operator-linebreak: 0 */

import React from 'react'
import styled from 'styled-components'
// import { Link } from 'react-router-dom'

import Header from 'components/header'
import BlogPost from 'components/blogPost'
import YouTubeVideo from 'components/youTubeVideo'
import PostItem from 'components/postItem'
import Footer from 'components/footer'
import Advertisement from 'components/advertisement'
import MobileComponent from 'components/mobileComponent'

import Musician from 'resources/assets/img/musician1.png'
import Musician1 from 'resources/assets/img/2pac.jpg'
import Musician2 from 'resources/assets/img/eminem.jpg'
// import backgroundImage from 'resources/assets/img/background.png'

import blogPageEnhancer from './blogPageEnhancer'

const Heading = styled.div`
  max-width: 1200px;
  margin: auto;
  display: flex;
  justify-content: center;
  margin-top: 40px;
`
const TitleContainer = styled.div`
  width: 76%;
  text-align: center;
  text-transform: capitalize;
  display: flex;
  flex-direction: column;
`
const BlogTitle = styled.span`
  font-weight: 600;
  font-size: 54px;
  letter-spacing: 3.2px;
  color: #010101;
  @media only screen and (max-width: 450px) {
    font-size: 27px;
  }
`
const BlogSubTitle = styled.span`
  font-size: 27px;
  color: #666666;
  letter-spacing: 1.6px;
  @media only screen and (max-width: 450px) {
    font-size: 16px;
    color: #000000;
  }
`
const BackgroundPicture = styled.div`
  width: 100%;
  height: 730px;
  background-image: url(${props => props.src});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  margin: 60px 0;
  @media only screen and (max-width: 450px) {
    height: 300px;
  }
`
// const BackgroundImg = styled.img`
//     width: 100%;
//     height:100%;
// `

const VideoContainer = styled.div`
  width: 78%;
  margin: auto;
  margin-top: 80px;
  margin-bottom: 60px;
`
const TagsContainer = styled.div`
  display: flex;
  width: 100%;
  max-width: 1200px;
  justify-content: center;
  margin: auto;
  @media only screen and (max-width: 450px) {
    margin-top: 20px;
  }
`
const Tag = styled.button`
  border: 1px solid #c9c9c9;
  color: #666666;
  padding: 3px 10px;
  background: transparent;
  border-radius: 15px;
  font-weight: bold;
  cursor: pointer;
  color: #c9c9c9;
  :not(:last-child) {
    margin-right: 20px;
  }
  @media only screen and (max-width: 530px) {
    font-size: 11px;
    padding: 3px 5px;
    :not(:last-child) {
      margin-right: 5px;
    }
  }
`
const AlsoLikeHeaderContainer = styled.div`
  max-width: 1200px;
  margin: 40px auto;
  height: 100px;
  border-top: 1px solid #c9c9c9;
  border-bottom: 1px solid #c9c9c9;
  text-transform: capitalize;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  font-size: 30px;
  color: #000000;
`
const MayLikeContainer = styled.div`
  display: flex;
  max-width: 1200px;
  margin: auto;
  justify-content: space-between;
  flex-wrap: wrap;
  @media only screen and (max-width: 1150px) {
    flex-direction: column;
    align-items: center;
  }
`

// const StyledLink = styled(Link)`
//   margin-bottom: 60px;
//   @media only screen and (max-width: 1150px) {
//     display: flex;
//     justify-content: center;
//   }
// `
const MobileAuthorContainer = styled.div`
  display: none;
  color: #666666;
  justify-content: center;
  margin-top: 20px;
  @media only screen and (max-width: 450px) {
    display: flex;
  }
`

const Author = styled.span`
  color: #ff9d00;
`
const Div = styled.div`
  display: flex;
  max-width: 1200px;
  margin: auto;
  justify-content: space-between;
  flex-wrap: wrap;
  @media only screen and (max-width: 1150px) {
    flex-direction: column;
    align-items: center;
  }
`

const AdvertisementContainer = styled.div`
  width: 357px;
  height: 627px;
`

const blogPostData = {
  title: 'AJ Tracey Drops A New Visual For Mimi',
  subTitle: 'AJ Also Talks About His Upcoming Album And Tour',
  views: '3000',
  raiting: '5/5',
  date: 'August 23rd 2018',
  time: '1',
  author: 'Mohammed Patel',
  text:
    "Georgia (Georgian: საქართველო, translit.: sakartvelo, IPA: [sɑkʰɑrtʰvɛlɔ] (About this sound listen)) is a country in the Caucasus region of Eurasia. Located at the crossroads of Western Asia and Eastern Europe, it is bounded to the west by the Black Sea, to the north by Russia, to the south by Turkey and Armenia, and to the southeast by Azerbaijan. The capital and largest city is Tbilisi. Georgia covers a territory of 69,700 square kilometres (26,911 sq mi), and its 2017 population is about 3.718 million. Georgia is a unitary semi-presidential republic, with the government elected through a representative democracy.During the classical era, several independent kingdoms became established in what is now Georgia, such as Colchis, later known as Lazica and Iberia. The Georgians adopted Christianity in the early 4th century. The common belief had an enormous importance for spiritual and political unification of early Georgian states. A unified Kingdom of Georgia reached its Golden Age during the reign of King David IV and Queen Tamar in the 12th and early 13th centuries. Thereafter,the kingdom declined and eventually disintegrated under hegemony of various regional powers, including the Mongols, the Ottoman Empire, and successive dynasties of Iran. In the late 18th century, the eastern Georgian Kingdom of Kartli-Kakheti forged an alliance with the Russian Empire, which directly annexed the kingdom in 1801 and conquered the western Kingdom of Imereti in 1810. Russian rule over Georgia was eventually acknowledged in various peace treaties with Iran and the Ottomans and the remaining Georgian territories were absorbed by the Russian Empire in a piecemeal fashion in the course of the 19th century. During the Civil War following the Russian Revolution in 1917, Georgia briefly became part of the Transcaucasian Federation and then emerged as an independent republic before the Red Army invasion in 1921 which established a government of workers' and peasants' soviets. Soviet Georgia would be incorporated into a new Transcaucasian Federation which in 1922 would be a founding republic of the Soviet Union. In 1936, the Transcaucasian Federation was dissolved and Georgia emerged as a Union Republic. During the Great Patriotic War, almost 700,000 Georgians fought in the Red Army against the German invaders. After Soviet leader Joseph Stalin, a native Georgian, died in 1953, a wave of protest spread against Nikita Khrushchev and his de-Stalinization reforms, leading to the death of nearly one hundred students in 1956. From that time on, Georgia would become marred with blatant corruption and increased alienation of the government from the people.", //eslint-disable-line
}

const blogPageData = {
  blogPostData,
  video: 'https://www.youtube.com/watch?v=lt-udg9zQSE',
  tags: ['AJ Tracey', 'Music Video', 'Grime', 'UK Rap', 'London'],
  mayLike: [
    {
      picture: Musician,
      type: 'News',
      header: 'C36 Drops "Guten Tag" Video exclusively on mixtape madness',
      text:
        'Lorem ipsum dolor sit amet. consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et',
      author: 'Mohhammed Patel',
      views: '10,000',
      time: '1 Hour',
      id: 12,
    },
    {
      picture: Musician1,
      type: 'News',
      header:
        'Balistik releases the video for "who is next", on mixtape madness',
      text:
        'Lorem ipsum dolor sit amet. consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et',
      author: 'Mohhammed Patel',
      views: '10,000',
      id: 15,
      time: '1 Hour',
    },
    {
      picture: Musician2,
      type: 'News',
      header: 'WSTRN drops their new single "Sharna"',
      text:
        'Lorem ipsum dolor sit amet. consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et',
      author: 'Mohhammed Patel',
      views: '10,000',
      id: 7,
      time: '2 Hour',
    },
    {
      picture: Musician,
      type: 'News',
      header: 'Mo stack covers puma RS-O event in london',
      text:
        'Lorem ipsum dolor sit amet. consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et',
      author: 'Mohhammed Patel',
      views: '10,000',
      id: 20,
      time: '5 Hour',
    },
    {
      picture: Musician1,
      type: 'News',
      header: 'Lady Leshurr Drops Her New Freestyle',
      text:
        'Lorem ipsum dolor sit amet. consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et',
      author: 'Mohhammed Patel',
      views: '10,000',
      id: 30,
      time: '3 Hour',
    },
  ],
}

const BlogPage = ({ width, data }) => (
  <div>
    <Header bottomBorder />
    <Heading>
      <TitleContainer>
        <BlogTitle>
          {data.getPosts && data.getPosts.length > 0
            ? data.getPosts[0].title
            : ''}
        </BlogTitle>
        <BlogSubTitle>
          {data.getPosts && data.getPosts.length > 0
            ? data.getPosts[0].excerpt
            : ''}
        </BlogSubTitle>
        <MobileAuthorContainer>
          <span>
            {'By '}
            <Author>{blogPageData.blogPostData.author}</Author>
            {' - '}
            {blogPageData.blogPostData.time}
            {' Hour Ago'}
          </span>
        </MobileAuthorContainer>
      </TitleContainer>
    </Heading>
    <BackgroundPicture
      src={
        data.getPosts && data.getPosts.length > 0
          ? data.getPosts[0].media[0].imgs.full
          : ''
      }
    />
    {data.getPosts && data.getPosts.length > 0 ? (
      <BlogPost data={data.getPosts[0]} />
    ) : (
      ''
    )}
    {width > 450 && (
      <VideoContainer>
        <YouTubeVideo url={blogPageData.video} />
      </VideoContainer>
    )}
    <TagsContainer>
      {data.getPosts && data.getPosts.length > 0
        ? data.getPosts[0].tags.map(item => (
            <Tag key={item.id}>{item.name}</Tag>
          ))
        : ''}
    </TagsContainer>
    <AlsoLikeHeaderContainer>
      {width > 450 && <span>You May also like</span>}
      {width <= 450 && <span>What To Read Next</span>}
    </AlsoLikeHeaderContainer>
    <MayLikeContainer>
      {width > 450 && (
        <Div>
          <AdvertisementContainer>
            <Advertisement />
          </AdvertisementContainer>
          {blogPageData.mayLike.map(item => (
            // <StyledLink to={`/blog/${item.type}/${item.id}`} key={item.id}>
            // </StyledLink>
            <PostItem key={item.id} data={item} />
          ))}
        </Div>
      )}
      {width <= 450 &&
        blogPageData.mayLike.map(item => <MobileComponent data={item} />)}
    </MayLikeContainer>
    <Footer />
  </div>
)

export default blogPageEnhancer(BlogPage)
