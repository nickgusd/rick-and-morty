import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 40%;
  margin: 0 auto;
  box-shadow: 0 2px 4px rgb(0 0 0 / 20%);
  border-radius: 8px;

  & > img {
    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;
  }

  @media (max-width: 1439px) {
    flex-direction: column;

    & > img {
      border-top-left-radius: 8px;
      border-top-right-radius: 8px;
      border-bottom-left-radius: unset;
    }
  }

  @media (max-width: 767px) {
    width: 100%;
  }
`;

export const RightWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
  align-items: flex-start;
  justify-content: center;
  padding: 14px;

  & > h1 {
    font-size: 20px;
  }
`;

export const GridRow = styled.div`
  width: 100%;
  display: grid;
  grid-row-gap: 14px;
  grid-template-columns: 116px 1fr;
`;

export const GridWrapper = styled.div`
  display: grid;
  width: 100%;
  grid-row-gap: 14px;
`;

export const Header = styled.div`
  margin: 0 auto;
  & > h1 {
    font-size: 24px;
    text-align: center;
  }
`;
