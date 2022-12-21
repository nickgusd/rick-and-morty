import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled(Link)`
  display: flex;
  flex-direction: column;
  padding: 14px;
  margin: 14px auto;
  width: 60%;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgb(0 0 0 / 20%);
  & > h2 {
    font-size: 18px;
  }
  text-decoration: none;
  color: black;

  &:hover {
    background-color: rgba(0, 0, 0, 0.07);
  }

  @media (max-width: 767px) {
    width: 100%;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;

  & > h2 {
    font-size: 18px;
  }
`;

export const Episode = styled.div`
  display: flex;
  justify-content: space-between;
`;
