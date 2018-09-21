/* eslint operator-linebreak: 0 */
/* eslint object-curly-newline: 0 */

import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

import ClockIcon from 'resources/assets/svgComponents/Clock'

import searchEnhancer from './searchEnhancer'
import SearchMedia from './searchMedia'

const Container = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgb(247, 148, 29, 0.89);
  z-index: 3;
  overflow-y: auto;
  padding-bottom: 40px;
`
const Input = styled.input`
  width: 77%;
  max-width: 1028px;
  background: transparent;
  border: none;
  border-bottom: 12px solid #ffffff;
  height: 105px;
  outline: none;
  color: #ffffff;
  font-size: 62px;
  font-weight: 600;
  ::-webkit-input-placeholder {
    color: #ffffff;
    font-size: 62px;
    font-weight: 600;
  }
  ::-moz-placeholder {
    color: #ffffff;
    font-size: 62px;
    font-weight: 600;
  }
  :-ms-input-placeholder {
    color: #ffffff;
    font-size: 62px;
    font-weight: 600;
  }
  :-moz-placeholder {
    color: #ffffff;
    font-size: 62px;
    font-weight: 600;
  }
`

const InputContainer = styled.div`
  margin-top: 100px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`
const Close = styled.span`
  position: absolute;
  right: 0;
  margin-right: 40px;
  margin-top: 20px;
  font-weight: bold;
  font-size: 25px;
  cursor: pointer;
  color: #ffffff;
`
const DataContainer = styled.div`
  width: 100%;
  margin: 40px auto;
`
const ShowMore = styled(Link)`
  color: #ffffff;
  font-weight: 600;
  font-size: 17px;
  width: 100%;
  display: flex;
  justify-content: center;
  cursor: pointer;
`
const Span = styled.div`
  color: #ffffff;
  font-weight: 600;
  font-size: 17px;
  text-align: center;
`

const SpanTitle = styled.div`
  color: #ffffff;
  font-weight: 600;
  font-size: 17px;
  text-align: left;
`

// ========================================================================================================//

const ItemContainer = styled.div`
  width: 77%;
  max-width: 1028px;
  margin: auto;
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
  color: #ffffff;
`

const Time = styled.span`
  margin-left: 10px;
`

const TimeContainer = styled.div`
  display: flex;
  font-size: 13px;
`

const getDate = date => {
  const newDate = new Date(date)
  return `${newDate.getDay()}/${newDate.getMonth()}/${newDate.getFullYear()}`
}

const renderData = searchResult => (
  <DataContainer>
    {searchResult && searchResult.length > 0
      ? searchResult.map(item => (
          <ItemContainer key={item.id}>
            <Item>
              <SearchMedia id={item.featured_media} />
              <ContentContainer>
                <SpanTitle dangerouslySetInnerHTML={{ __html: item.title }} />
                <TimeContainer>
                  <ClockIcon height="20px" color="#ffffff" />
                  <Time>{getDate(item.date)}</Time>
                </TimeContainer>
              </ContentContainer>
            </Item>
          </ItemContainer>
        ))
      : ''}
  </DataContainer>
)

const Search = ({ toggleSearch, handleSubmit, data, value }) => {
  const searchResult =
    data && data.searchedData && data.searchedData.length > 0
      ? data.searchedData
      : null
  return (
    <Container>
      <Close onClick={() => toggleSearch()}>X</Close>
      <InputContainer>
        <Input placeholder="Search" onKeyPress={handleSubmit} />
      </InputContainer>
      {renderData(searchResult)}
      {searchResult && (
        <ShowMore to={`/searchresult/${value}`} onClick={() => toggleSearch()}>
          View all
        </ShowMore>
      )}
      {!searchResult &&
        value !== '' && <Span>No results found for {value}</Span>}
    </Container>
  )
}

export default searchEnhancer(Search)
