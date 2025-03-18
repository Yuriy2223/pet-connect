import React, { useState, useEffect } from 'react';
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
  className?: string;
}

export const SearchField: React.FC<SearchProps> = ({
  onSearch,
  value = '',
  className,
}) => {
  const [query, setQuery] = useState(value);

  useEffect(() => {
    setQuery(value);
  }, [value]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  const handleClear = () => {
    setQuery('');
    onSearch('');
  };

  const handleSearch = () => {
    onSearch(query);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleSearch();
  };

  return (
    <SearchContainer className={className}>
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
        <ButtonSearch type="submit">
          <IconsSearch width={18} height={18} iconName="search" />
        </ButtonSearch>
      </form>
    </SearchContainer>
  );
};
