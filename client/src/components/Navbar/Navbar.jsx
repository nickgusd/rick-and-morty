import { Wrapper, LinkStyled, InnerWrapper, SecondWrapper } from './Navbar.js';
import Rick from '../../assets/rick_sanchez2.svg';

export const Navbar = () => {
  return (
    <Wrapper>
      <InnerWrapper>
        {/* <img src={Portal} alt="rick" style={{ width: '32px' }} /> */}
        <img src={Rick} alt="rick" style={{ width: '24px' }} />
      </InnerWrapper>
      <SecondWrapper>
        <LinkStyled to="/characters">Characters</LinkStyled>
        <LinkStyled to="/location">Location</LinkStyled>
        <LinkStyled>Episodes</LinkStyled>
      </SecondWrapper>
    </Wrapper>
  );
};
