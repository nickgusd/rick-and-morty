import styled from 'styled-components';

import { FiX, FiMenu } from "react-icons/fi";
import { Link } from 'react-router-dom';

export const Wrapper = styled.div`
  height: 50px;
  background: #20232a;
  display: flex;
  gap: 14px;
  padding: 14px;
  justify-content: space-between;
  position: sticky;
  top: 0px;
  z-index: 100;
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
  padding: 14px;

  &:hover {
    background-color: #5c5c62;
    border-radius: 8px;
    color: #2185d0;
  }
`;

export const MenuStyled = styled(FiMenu)`
  cursor: pointer;
  transition-property: transform-scale;
  transition-duration: 4s;
  transition-delay: 2s;

  &:hover {
    transform: scale(1.2);
  }
`

export const CloseStyled = styled(FiX)`
  cursor: pointer;
  transition-property: transform-scale;
  transition-duration: 4s;
  transition-delay: 2s;

  &:hover {
    transform: scale(1.2);
  }
`

export const ImageStyled = styled.img`
  width: 24px;
  cursor: pointer;
  transition-duration: 4s;
  transition-delay: 2s;
  transition-property: transform-scale;
  
  &:hover {
  transform: scale(1.2);
}
`