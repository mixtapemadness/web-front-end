/* eslint operator-linebreak: 0 */

import React from 'react'
import styled from 'styled-components'

import MobileComponent from 'components/mobileComponent'
import searchEnhancer from './searchEnhancer'
import SearchMedia from './searchMedia'

const Container = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: #f7941d;
  z-index: 3;
  opacity: 0.89;
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
  max-width: 1200px;
  margin: 20px auto;
`
const ShowMore = styled.div`
  color: #ffffff;
  font-weight: 600;
  font-size: 17px;
  width: 100%;
  display: flex;
  justify-content: center;
  cursor: pointer;
`

const Search = ({ toggleSearch, handleSubmit, data }) => {
  const searchResut =
    data && data.searchedData && data.searchedData.length > 0
      ? data.searchedData
      : {}
  return (
    <Container>
      <SearchMedia id={searchResut.featured_media} />
      {console.log('data from search', data)}
      <Close onClick={() => toggleSearch()}>X</Close>
      <InputContainer>
        <Input placeholder="Search" onKeyPress={handleSubmit} />
      </InputContainer>
      <DataContainer>
        {searchResut && searchResut.lenght > 0
          ? searchResut.map(item => <MobileComponent data={item} />)
          : ''}
      </DataContainer>
      {data && <ShowMore>Show more +</ShowMore>}
    </Container>
  )
}

export default searchEnhancer(Search)
