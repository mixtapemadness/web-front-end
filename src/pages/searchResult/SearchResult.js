/* eslint implicit-arrow-linebreak: 0 */
/* eslint object-curly-newline: 0 */
/* eslint react/jsx-curly-brace-presence: 0 */
/* eslint indent: 0 */
/* eslint react/jsx-indent: 0 */
/* eslint react/jsx-closing-tag-location: 0 */

import React from 'react'
import styled from 'styled-components'
import SearchMedia from 'components/search/searchMedia'
import ClockIcon from 'resources/assets/svgComponents/Clock'
import ContinueRead from 'components/continueRead'
import { dateStringify } from 'helpers'
import searchResultEnhance from './searchResultEnhancer'

const Container = styled.div`
  max-width: 1200px;
  margin: auto;
  padding-top: 40px;
`

const InputContainer = styled.div`
  width: 100%;
  margin-bottom: 25px;
`

const Input = styled.input`
  width: 100%;
  background: transparent;
  border: none;
  border-bottom: 2px solid #ffa019;
  height: 105px;
  outline: none;
  color: #ffa019;
  font-size: 62px;
  font-weight: 600;
  ::-webkit-input-placeholder {
    color: #ffa019;
    font-size: 62px;
    font-weight: 600;
  }
  ::-moz-placeholder {
    color: #ffa019;
    font-size: 62px;
    font-weight: 600;
  }
  :-ms-input-placeholder {
    color: #ffa019;
    font-size: 62px;
    font-weight: 600;
  }
  :-moz-placeholder {
    color: #ffa019;
    font-size: 62px;
    font-weight: 600;
  }
`

const Filter = styled.div`
  display: flex;
  border-bottom: 1px solid #ccc;
  color: #000000;
  font-weight: 600;
`

const Item = styled.div`
  width: 50%;
  padding-bottom: 20px;
  margin-top: 20px;
  border-bottom: 1px solid #ccc;
  display: flex;
`
const ContentContainer = styled.div`
  width: 50%;
  margin-left: 10px;
  font-size: 16px;
  font-weight: bold;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: #666666;
`

const ContentContainerBottom = styled.div``

const Span = styled.span``

const Time = styled.span`
  margin-left: 10px;
`

const TimeContainer = styled.div`
  display: flex;
  font-size: 13px;
`
const CategoryContainer = styled.ul`
  display: flex;
  list-style: none;
`
const Category = styled.li`
  margin-left: 20px;
  color: #666666;
  cursor: pointer;
  ${p => p.active && 'border-bottom: 2px solid #ff9600'};
`

const renderData = searchedData =>
  searchedData && searchedData.length > 0
    ? searchedData.map(item => (
        <Item key={item.id}>
          {console.log('item', item)}
          <SearchMedia id={item.featured_media} />
          <ContentContainer>
            <Span dangerouslySetInnerHTML={{ __html: item.title }} />
            <ContentContainerBottom>
              <TimeContainer>
                <ClockIcon height="20px" color="#666666" />
                <Time>{dateStringify(item.date, false, true)}</Time>
              </TimeContainer>
              <ContinueRead categoryId={item.categories} PostSlug={item.slug} />
            </ContentContainerBottom>
          </ContentContainer>
        </Item>
      ))
    : ''

const SearchResult = ({
  data,
  category,
  chooseCategory,
  match,
  handleSubmit,
}) => (
  <Container>
    <InputContainer>
      <Input
        defaultValue={match ? match.params.key : ''}
        onKeyPress={handleSubmit}
      />
    </InputContainer>

    <Filter>
      <span>Filter Results:</span>
      <CategoryContainer>
        <Category
          active={category === 'all'}
          onClick={() => chooseCategory('all')}
        >
          All
        </Category>
        <Category
          active={category === 'videos'}
          onClick={() => chooseCategory('videos')}
        >
          Videos
        </Category>
        <Category
          active={category === 'articles'}
          onClick={() => chooseCategory('articles')}
        >
          Articles
        </Category>
        <Category
          active={category === 'events'}
          onClick={() => chooseCategory('events')}
        >
          Events
        </Category>
        <Category
          active={category === 'reviews'}
          onClick={() => chooseCategory('reviews')}
        >
          Reviews
        </Category>
        <Category
          active={category === 'news'}
          onClick={() => chooseCategory('news')}
        >
          News
        </Category>
        <Category
          active={category === 'interviews'}
          onClick={() => chooseCategory('interviews')}
        >
          Interviews
        </Category>
      </CategoryContainer>
    </Filter>
    {renderData(data.searchedData)}
  </Container>
)

export default searchResultEnhance(SearchResult)
