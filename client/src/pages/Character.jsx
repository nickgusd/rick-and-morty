import { useLocation } from "react-router-dom";
import { gql } from "@apollo/client";
import { useQuery } from "@apollo/react-hooks";

import { EpisodeCard } from "../components/EpisodeCard.jsx";
import LoaderComponent from "../components/Loader/Loader.jsx";
import { Layout } from "../components/Layout/Layout.jsx";
import {
  Wrapper,
  GridRow,
  RightWrapper,
  GridWrapper,
  Header,
} from "../components/Character.js";
import { Container } from "./CharactersStyles.js";

export default function Character() {
  const location = useLocation();
  const id = location.pathname.split("/").pop();

  const GET_CHARACTER_QUERY = gql`
    query getCharacter($id: ID!) {
      character(id: $id) {
        created
        name
        gender
        image
        created
        status
        species
        origin {
          id
          name
        }
        type
        episode {
          id
          name
          air_date
          created
          episode
        }
      }
    }
  `;

  const { data, loading } = useQuery(GET_CHARACTER_QUERY, {
    variables: {
      id: id,
    },
  });

  return (
    <Layout>
      {loading ? (
        <LoaderComponent />
      ) : Object.keys(data).length ? (
        <Container>
          <Wrapper>
            <img src={data.character.image} />
            <RightWrapper>
              <Header>
                <h1>{data.character.name}</h1>
              </Header>
              <GridWrapper>
                <GridRow>
                  {" "}
                  Status:
                  <b>{data.character.status}</b>
                </GridRow>
                <GridRow>
                  Gender: <b>{data.character?.gender}</b>
                </GridRow>{" "}
                <GridRow>
                  {" "}
                  Species: <b>{data.character.species}</b>
                </GridRow>
                <GridRow>
                  Origin: <b>{data.character.origin.name}</b>
                </GridRow>
              </GridWrapper>
            </RightWrapper>
          </Wrapper>
          {data.character.episode.length
            ? data.character.episode.map((item) => (
                <EpisodeCard
                  data={item}
                  key={item.id}
                  href={`/episode/${item.id}`}
                />
              ))
            : null}
        </Container>
      ) : null}
    </Layout>
  );
}
