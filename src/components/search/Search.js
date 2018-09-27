/* eslint operator-linebreak: 0 */
/* eslint object-curly-newline: 0 */
/* eslint react/jsx-curly-brace-presence: 0 */
/* eslint curly:0 */
/* eslint indent:0 */

import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import SearchedItem from 'components/searchedItem'
import searchEnhancer from './searchEnhancer'

const Container = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgb(247, 148, 29, 0.89);
  z-index: 3;
  overflow-y: auto;
  padding-bottom: 40px;
  flex-direction: column;
`

const Content = styled.div`
  width: 1024px;
  padding: 20px;
  box-sizing: border-box;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const Input = styled.input`
  width: 100%;
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
  display: flex;
  flex-direction: column;
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

const Search = ({ toggleSearch, handleSubmit, data, value }) => {
  const searchResult =
    data && data.searchedData && data.searchedData.length > 0
      ? data.searchedData
      : null
  return (
    <Container>
      <Close onClick={() => toggleSearch()}>X</Close>
      <Content>
        <InputContainer>
          <Input placeholder="Search" onKeyPress={handleSubmit} />
        </InputContainer>
        {/* {renderData(searchResult)} */}
        <DataContainer>
          {searchResult &&
            searchResult.length &&
            searchResult.map(item => (
              <SearchedItem
                toggleSearch={toggleSearch}
                color={'#ffffff'}
                data={item}
              />
            ))}
        </DataContainer>

        {searchResult && (
          <ShowMore
            to={`/searchresult/all/${value}`}
            onClick={() => toggleSearch()}
          >
            View all
          </ShowMore>
        )}
        {!searchResult &&
          value !== '' && <Span>No results found for {value}</Span>}
      </Content>
    </Container>
  )
}

export default searchEnhancer(Search)
