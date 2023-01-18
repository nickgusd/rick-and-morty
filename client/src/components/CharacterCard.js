import styled from "styled-components";
import { Link } from "react-router-dom";

export const Wrapper = styled.div`
  padding: 14px;
  display: grid;
  grid-template-columns: minmax(200px, 1fr) minmax(200px, 1fr) minmax(
      200px,
      1fr
    );
  grid-template-rows: auto;
  grid-column-gap: 14px;
  gid-row-gap: 14px;

  @media (max-width: 1439px) {
    grid-template-columns: minmax(200px, 1fr) minmax(200px, 1fr);
  }

  @media (max-width: 767px) {
    grid-template-columns: minmax(200px, 1fr);
  }
`;

export const Character = styled(Link)`
  & > div {
    margin: 20px;
    font-size: 20px;
  }
  width: min-content;
  box-shadow: 0 2px 4px rgb(0 0 0 / 20%);
  border-radius: 12px;
  margin: 14px auto;
  &:hover {
    background-color: rgba(0, 0, 0, 0.07);
  }
  cursor: pointer;
  text-decoration: none;
  color: black;
`;

export const SearchWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
  justify-content: center;
  margin-top: 14px;
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
  justify-content: flex-start;
  width: ${(props) => (props.character ? "60%" : null)};
`;

export const ImageWrapper = styled.div`
  margin: 24px 0px;

  & > img {
    width: 100%;
  }
`;
