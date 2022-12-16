/* eslint-disable react/prop-types */
import { Container, Wrapper, Episode } from "./EpisodeCard.js";

export const EpisodeCard = ({ data, href }) => {
  return (
    <Container to={href}>
      <Wrapper>
        <h2>{data.name}</h2>
        <div>Air Date</div>
      </Wrapper>
      <Episode>
        <div>{data.episode}</div>
        <div>{data.air_date}</div>
      </Episode>
    </Container>
  );
};
