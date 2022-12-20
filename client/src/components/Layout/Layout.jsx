import { Wrapper } from "./Layout";
import { useDispatch } from "react-redux";
import { rickAndMortyActions } from "../../reducers";

// eslint-disable-next-line react/prop-types
export const Layout = ({ children, noResults }) => {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(rickAndMortyActions.setSidebar(false));
  };
  return (
    <Wrapper noResults={noResults} onClick={handleClick}>
      {children}
    </Wrapper>
  );
};
