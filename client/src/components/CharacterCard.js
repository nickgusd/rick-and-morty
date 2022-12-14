import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 14px;
  display: grid;
  grid-template-columns: minmax(200px, 1fr) minmax(200px, 1fr) minmax(200px, 1fr);
  grid-template-rows: auto;
  grid-column-gap: 0px;
`;

export const Character = styled.div`
  padding: 14px;
  & > div {
    margin: 20px;
    font-size: 20px;
  }
  // width: 150px;
  // background: blue;
`;

export const SearchWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
  justify-content: center;
  margin-top: 14px;
`;
