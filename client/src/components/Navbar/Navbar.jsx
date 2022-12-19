/* eslint-disable prettier/prettier */
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { rickAndMortyActions } from "../../reducers/index";
import { rickSelectors } from "../../selectors/index";

import { Wrapper, InnerWrapper, SecondWrapper } from "./Navbar.js";
import Rick from "../../assets/rick_sanchez2.svg";
import { FiMenu } from "react-icons/fi";

export const Navbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const sidebarOpen = useSelector(rickSelectors.getSidebarState) || false;

  const handleClick = (event) => {
    console.log("event", event);
    dispatch(rickAndMortyActions.setSidebar(!sidebarOpen));
  };

  return (
    <Wrapper>
      <InnerWrapper>
        <img
          src={Rick}
          alt="rick"
          style={{ width: "24px", cursor: "pointer" }}
          onClick={() => navigate("/characters")}
        />
      </InnerWrapper>
      <SecondWrapper>
        <FiMenu color="white" size="2em" onClick={handleClick} />
        {/* <LinkStyled to="/characters">Characters</LinkStyled>
        <LinkStyled to="/location">Location</LinkStyled>
        <LinkStyled to="/episodes">Episodes</LinkStyled> */}
      </SecondWrapper>
    </Wrapper>
  );
};
