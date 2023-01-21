import styled from "styled-components";

export const Wrapper = styled.div``;

export const FilterContainer = styled.div`
  padding: 24px 0px;
  display: flex;
  flex-direction: row;
  gap: 14px;
  justify-content: center;
  box-shadow: 0 2px 4px rgb(0 0 0 / 20%);

  @media (max-width: 767px) {
    flex-direction: column;
  }
`;

export const Flex = styled.div`
  display: flex;
  flex-direction: row;
  gap: 14px;
  justify-content: center;
`
