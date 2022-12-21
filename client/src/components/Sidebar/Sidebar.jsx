/* eslint-disable prettier/prettier */

import { Wrapper, LinkWrapper } from "./Sidebar";
import { useSelector, useDispatch } from "react-redux";
import { rickSelectors } from "../../selectors/index";
import { LinkStyled } from "../Navbar/Navbar";
import { rickAndMortyActions } from "../../reducers";

export const Sidebar = () => {
  const sidebarOpen = useSelector(rickSelectors.getSidebarState);
  const dispatch = useDispatch();

  const handleClick = (e) => {
    e.preventDefault();
    dispatch(rickAndMortyActions.setSidebar(false));
  };

  return (
    sidebarOpen && (
      <Wrapper>
        <LinkWrapper onClick={handleClick}>
          <LinkStyled to="/characters">Characters</LinkStyled>
          <LinkStyled to="/location">Location</LinkStyled>
          <LinkStyled to="/episodes">Episodes</LinkStyled>
        </LinkWrapper>
      </Wrapper>
    )
  );
};
