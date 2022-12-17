import styled from 'styled-components';

import { Link } from 'react-router-dom';

export const Wrapper = styled.div`
  height: 50px;
  background: #20232a;
  display: flex;
  gap: 14px;
  padding: 8px;
  justify-content: space-between;
`;

export const InnerWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const SecondWrapper = styled.div`
  display: flex;
  gap: 14px;
  align-items: center;
`;

export const LinkStyled = styled(Link)`
  color: white;
  text-decoration: none;

  &:hover {
    color: #2185d0;
  }
`;
