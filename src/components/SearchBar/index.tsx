import React from 'react';

import { StyledTextInput, Container } from './styles';

import { Search } from '@material-ui/icons';

const SearchBar: React.FC = () => {
  return (
    <Container>
      <Search />
      <StyledTextInput placeholder="Search" />
    </Container>
  );
};

export default SearchBar;
