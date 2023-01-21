import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: ${props => props.characters ? "0px 0px 24px" : "24px"};
  height: calc(100vh - 50px);
  position: relative;
  overflow: auto;
`;
