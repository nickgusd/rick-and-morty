/* eslint-disable prettier/prettier */
import { useNavigate } from "react-router-dom";

import { Wrapper, LinkStyled, InnerWrapper, SecondWrapper } from "./Navbar.js";
import Rick from "../../assets/rick_sanchez2.svg";

export const Navbar = () => {
  const navigate = useNavigate();
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
        <LinkStyled to="/characters">Characters</LinkStyled>
        <LinkStyled to="/location">Location</LinkStyled>
        <LinkStyled to="/episodes">Episodes</LinkStyled>
      </SecondWrapper>
    </Wrapper>
  );
};
