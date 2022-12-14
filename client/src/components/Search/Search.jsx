import React from 'react';
import { Input } from 'semantic-ui-react';

// eslint-disable-next-line react/prop-types
const Search = ({ onChange }) => {
  return <Input placeholder="Search..." onChange={onChange} />;
};

export default Search;
