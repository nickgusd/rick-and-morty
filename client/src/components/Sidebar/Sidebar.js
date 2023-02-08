import styled from 'styled-components';

export const Wrapper = styled.div`
  position: fixed;
  height: Calc(100lvh);
  width: 300px;
  left: Calc(100% - 300px);
  z-index: 200;
  background: white;
  overflow-y: scroll;
  padding: 60px 14px;
  background: #20232a;
  transition-property: width;
  transition-duration: 4s;
  transition-delay: 2s;

  @media (max-width: 1439px) {
    width: 100%;
    left: unset;
  }

`;

export const LinkWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
`;
