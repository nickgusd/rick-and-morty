import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: ${(props) => (props.noResults ? '24px 0px' : '24px')};
  width: 100vw;
  height: calc(100vh - 50px);
`;
