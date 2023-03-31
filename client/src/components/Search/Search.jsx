import React from "react";
import { Input } from "semantic-ui-react";

// eslint-disable-next-line react/prop-types
const Search = ({ onChange, value }) => {
  return <Input placeholder="Search..." onChange={onChange} value={value} />;
};

export default Search;
