/* eslint-disable prettier/prettier */
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

import { EpisodeCard } from "../components/EpisodeCard.jsx";
import LoaderComponent from "../components/Loader/Loader.jsx";
import { Layout } from "../components/Layout/Layout.jsx";
import {
  Wrapper,
  GridRow,
  RightWrapper,
  GridWrapper,
  Header
} from "../components/Character.js";

export default function Character() {
  const location = useLocation();
  const [character, setCharacter] = useState([]);
  const [episodes, setEpisodes] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const id = location.pathname.split("/").pop();

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/${id}`)
      .then((data) => {
        return data.json();
      })
      .then((data) => {
        setCharacter(data);
        setIsLoading(true);
        Promise.all(
          data.episode.map((item) => {
            return fetch(item).then((res) => res.json());
          })
        )
          .then((res) => setEpisodes(res))
          .catch((error) => console.log(error))
          .finally(() => setTimeout(() => setIsLoading(false), 200));
      });
  }, []);

  return (
    <Layout>
      {isLoading ? (
        <LoaderComponent />
      ) : (
        <>
          <Wrapper>
            <img src={character?.image} />
            <RightWrapper>
              <Header>
                <h1>{character?.name}</h1>
              </Header>
              <GridWrapper>
                <GridRow>
                  {" "}
                  Status:
                  <b>{character?.status}</b>
                </GridRow>
                <GridRow>
                  Gender: <b>{character?.gender}</b>
                </GridRow>{" "}
                <GridRow>
                  {" "}
                  Species: <b>{character?.species}</b>
                </GridRow>
                <GridRow>
                  Origin: <b>{character?.origin?.name}</b>
                </GridRow>
              </GridWrapper>
            </RightWrapper>
          </Wrapper>
          {episodes
            ? episodes.map((item) => (
                <EpisodeCard
                  data={item}
                  key={item.id}
                  href={`/episode/${item.id}`}
                />
              ))
            : null}
        </>
      )}
    </Layout>
  );
}
