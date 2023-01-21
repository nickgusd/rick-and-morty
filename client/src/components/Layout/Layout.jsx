import { Wrapper } from "./Layout";
import { useDispatch } from "react-redux";
import { rickAndMortyActions } from "../../reducers";

// eslint-disable-next-line react/prop-types
export const Layout = ({ children, noResults, characters }) => {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(rickAndMortyActions.setSidebar(false));
  };

  return (
    <Wrapper
      noResults={noResults}
      onClick={handleClick}
      characters={characters}
    >
      {children}
    </Wrapper>
  );
};
