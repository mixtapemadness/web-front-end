import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

import Header from 'components/header'
import BlogPost from 'components/blogPost'
import YouTubeVideo from 'components/youTubeVideo'
import TrendingItem from 'components/trendingItem'
import Footer from 'components/footer'
import Advertisement from 'components/advertisement'

import Musician from 'resources/assets/img/musician1.png'
import Musician1 from 'resources/assets/img/2pac.jpg'
import Musician2 from 'resources/assets/img/eminem.jpg'
import backgroundImage from 'resources/assets/img/background.png'

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
  font-size: 60px;
  font-weight: bold;
  letter-spacing: 1px;
  color: #000000;
`
const BlogSubTitle = styled.span`
  font-size: 27px;
  letter-spacing: 1px;
  color: #666666;
`
const BackgroundPicture = styled.div`
  width: 100%;
  height: 500px;
  background-image: url(${backgroundImage});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  margin: 60px 0;
`
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

const StyledLink = styled(Link)`
  margin-bottom: 60px;
  @media only screen and (max-width: 1150px) {
    display: flex;
    justify-content: center;
  }
`

const blogPostData = {
  views: '3000',
  raiting: '5/5',
  date: 'August 23rd 2018',
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
    },
  ],
}

const BlogPage = () => (
  <div>
    <Header bottomBorder />
    <Heading>
      <TitleContainer>
        <BlogTitle>AJ Tracey Drops A New Visual For Mimi</BlogTitle>
        <BlogSubTitle>
          AJ also talks about his upcoming album and tour
        </BlogSubTitle>
      </TitleContainer>
    </Heading>
    <BackgroundPicture />
    <BlogPost data={blogPageData.blogPostData} />
    <VideoContainer>
      <YouTubeVideo url={blogPageData.video} />
    </VideoContainer>
    <TagsContainer>
      {blogPageData.tags.map(item => (
        <Tag key={item}>{item}</Tag>
      ))}
    </TagsContainer>
    <AlsoLikeHeaderContainer>
      <span>You May also like</span>
    </AlsoLikeHeaderContainer>
    <MayLikeContainer>
      <Advertisement />
      {blogPageData.mayLike.map(item => (
        <StyledLink to={`/blog/${item.type}/${item.id}`} key={item.id}>
          <TrendingItem data={item} height="true" />
        </StyledLink>
      ))}
    </MayLikeContainer>
    <Footer />
  </div>
)

export default blogPageEnhancer(BlogPage)
