import { Wrapper } from "./Layout";

// eslint-disable-next-line react/prop-types
export const Layout = ({ children, noResults }) => {
  return <Wrapper noResults={noResults}>{children}</Wrapper>;
};
