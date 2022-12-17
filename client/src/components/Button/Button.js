import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: ${(props) => (props.search ? null : '24px')};
`;
