/* eslint operator-linebreak: 0 */
/* eslint object-curly-newline: 0 */
/* eslint react/jsx-curly-brace-presence: 0 */
/* eslint curly:0 */
/* eslint indent:0 */

import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import SearchedItem from 'components/searchedItem';
import searchEnhancer from './searchEnhancer';
import IconButton from '../IconButton/IconButton';
import Spinner from '../Spinner/Spinner';

import './_Search.scss';

const ShowMore = styled(Link)`
  color: #ffffff;
  font-weight: 600;
  font-size: 17px;
  width: 100%;
  display: flex;
  justify-content: center;
  cursor: pointer;
`;

const Span = styled.div`
  color: #ffffff;
  font-weight: 600;
  font-size: 18px;
  text-align: center;
`;

class Search extends Component {
  state = {
    searchValue: null,
  }

  componentDidMount() {
    this.inputRef.focus();
  }

  handleSubmit = (e) => {
    const { handleSubmit } = this.props;
    const { searchValue } = this.state;
    if (searchValue) handleSubmit(searchValue);
    e.preventDefault();
    return false;
  }

  handleOnChangeInput = (e) => {
    this.setState({
      searchValue: e.target.value,
    });
  }

  SearchResults = () => {
    const { toggleSearch, data, value } = this.props;
    const searchResult =
      data && data.searchedData && data.searchedData.length > 0
        ? data.searchedData
        : null;
    return (
      <div>
        {searchResult && searchResult.length && searchResult.map(item => (
          <SearchedItem
            key={item.id}
            toggleSearch={toggleSearch}
            data={item}
          />
      ))}
        {searchResult && (
          <ShowMore
            to={`/searchresult/all/${value}`}
            onClick={() => toggleSearch()}
          >
            View all
          </ShowMore>
        )}
        {!searchResult && value ? <Span>No results found for {value}</Span> : ''}
      </div>
    );
  }

  render() {
    const { toggleSearch, data } = this.props;
    const isLoading = data && data.loading;
    return (
      <div className="search-overlay">
        <header className="search-overlay__header">
          <IconButton onClick={toggleSearch} iconClassName="fas fa-times" className="search-overlay__close" />
        </header>
        <div className="search-overlay__content">
          <form
            className="search-overlay__form"
            onSubmit={this.handleSubmit}
          >
            <input
              ref={ref => { this.inputRef = ref; }}
              type="text"
              className="search-overlay__input"
              placeholder="What are you looking for?"
              onChange={this.handleOnChangeInput}
            />
            <IconButton iconClassName="fa fa-search" buttonType="submit" onClick={this.handleSubmit} />
          </form>
          <div className="search-overlay__results">
            {isLoading ? <Spinner isLightColor /> : this.SearchResults()}
          </div>
        </div>
      </div>
    );
  }
}

export default searchEnhancer(Search);
