import { useLocation } from "react-router-dom";
import { gql } from "@apollo/client";
import { useQuery } from "@apollo/react-hooks";
import { CharacterCard } from "../components/CharacterCard.jsx";
import LoaderComponent from "../components/Loader/Loader.jsx";
import { Layout } from "../components/Layout/Layout.jsx";
import { Container } from "./CharactersStyles.js";
import { PromptWrapper } from "./EpisodeStyles.js";
import OpenAI from "../components/OpenAI/OpenAI.jsx";

export default function Episode() {
  const location = useLocation();
  const id = location.pathname.split("/").pop();

  const GET_CHARACTERS_BY_EPISODE_QUERY = gql`
    query getCharactersByEpisode($episodeId: ID!) {
      episode(id: $episodeId) {
        id
        name
        air_date
        episode
        created
        characters {
          name
          gender
          created
          image
          id
          species
          status
          type
        }
      }
    }
  `;

  const { data, loading } = useQuery(GET_CHARACTERS_BY_EPISODE_QUERY, {
    variables: { episodeId: id },
  });

  return (
    <Layout>
      {loading && <LoaderComponent />}
      {!loading && data && (
        <Container>
          <h1>{data.episode.name}</h1>
          <div>{data.episode.episode}</div>
          <div>{data.episode.air_date}</div>
          <PromptWrapper>
            <OpenAI
              prompt={
                data
                  ? `what is the episode of Rick and Morty ${data?.episode?.episode} called ${data?.episode?.name} about?`
                  : null
              }
            />
          </PromptWrapper>
          <CharacterCard character={data.episode.characters} />
        </Container>
      )}
    </Layout>
  );
}
