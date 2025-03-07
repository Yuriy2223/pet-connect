import React, { useState } from 'react';
import {
  ButtonClose,
  ButtonSearch,
  IconClose,
  IconsSearch,
  Search,
  SearchContainer,
} from './SearchField.styled';

interface SearchProps {
  onSearch: (query: string) => void;
  value?: string;
  // width?: string;
}

export const SearchField: React.FC<SearchProps> = ({
  onSearch,
  //  width
}) => {
  const [query, setQuery] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  const handleClear = () => {
    setQuery('');
  };

  const handleSearch = () => {
    if (query.trim()) {
      onSearch(query);
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleSearch();
  };

  return (
    <SearchContainer
    //  width={width}
    >
      <form onSubmit={handleSubmit}>
        <Search
          type="text"
          value={query}
          onChange={handleInputChange}
          placeholder="Search"
        />
        {query && (
          <ButtonClose type="button" onClick={handleClear}>
            <IconClose width={18} height={18} iconName="close" />
          </ButtonClose>
        )}
        <ButtonSearch type="button" onClick={handleSearch}>
          <IconsSearch width={18} height={18} iconName="search" />
        </ButtonSearch>
      </form>
    </SearchContainer>
  );
};
