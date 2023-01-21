import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { rickAndMortyActions } from "../../reducers/index";
import { rickSelectors } from "../../selectors/index";

import { Wrapper, InnerWrapper, SecondWrapper } from "./Navbar.js";
import Rick from "../../assets/rick_sanchez2.svg";
import { FiMenu, FiX } from "react-icons/fi";

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
        <img
          src={Rick}
          alt="rick"
          style={{ width: "24px", cursor: "pointer" }}
          onClick={() => {
            dispatch(rickAndMortyActions.setSidebar(false));
            navigate("/characters");
          }}
        />
      </InnerWrapper>
      <SecondWrapper>
        {!sidebarOpen ? (
          <FiMenu
            color="white"
            size="2em"
            onClick={handleClick}
            style={{ cursor: "pointer" }}
          />
        ) : (
          <FiX
            color="white"
            size="2em"
            onClick={handleClick}
            style={{ cursor: "pointer" }}
          />
        )}
      </SecondWrapper>
    </Wrapper>
  );
};
