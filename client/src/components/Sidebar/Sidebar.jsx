/* eslint-disable prettier/prettier */
import { Wrapper, LinkWrapper } from "./Sidebar";
import { useSelector } from "react-redux";
import { rickSelectors } from "../../selectors/index";
import { LinkStyled } from "../Navbar/Navbar";

export const Sidebar = () => {
  const sidebarOpen = useSelector(rickSelectors.getSidebarState) || false;
  console.log("test", sidebarOpen);
  return (
    sidebarOpen && (
      <Wrapper>
        <LinkWrapper>
          <LinkStyled to="/characters">Characters</LinkStyled>
          <LinkStyled to="/location">Location</LinkStyled>
          <LinkStyled to="/episodes">Episodes</LinkStyled>
        </LinkWrapper>
      </Wrapper>
    )
  );
};
