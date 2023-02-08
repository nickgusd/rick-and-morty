import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { rickAndMortyActions } from "../../reducers/index";
import { rickSelectors } from "../../selectors/index";

import { Wrapper, InnerWrapper, SecondWrapper, CloseStyled, MenuStyled, ImageStyled } from "./Navbar.js";
import Rick from "../../assets/rick_sanchez2.svg";

export const Navbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const sidebarOpen = useSelector(rickSelectors.getSidebarState);

  const handleClick = () => {
    dispatch(rickAndMortyActions.setSidebar(!sidebarOpen));
  };

  return (
    <Wrapper>
      <InnerWrapper>
        <ImageStyled
          src={Rick}
          alt="rick"
          onClick={() => {
            dispatch(rickAndMortyActions.setSidebar(false));
            navigate("/characters");
          }}
        />
      </InnerWrapper>
      <SecondWrapper>
        {!sidebarOpen ? (
          <MenuStyled
            color="white"
            size="2em"
            onClick={handleClick}
          />
        ) : (
          <CloseStyled
            color="white"
            size="2em"
            onClick={handleClick}
          />
        )}
      </SecondWrapper>
    </Wrapper>
  );
};
 