/* eslint-disable prettier/prettier */
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

import { EpisodeCard } from "../components/EpisodeCard.jsx";
import LoaderComponent from "../components/Loader/Loader.jsx";
import { Layout } from "../components/Layout/Layout.jsx";

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
          <h1>{character.name}</h1>
          <img src={character.image} />
          {episodes &&
            episodes.map((item) => <EpisodeCard data={item} key={item.id} />)}
        </>
      )}
    </Layout>
  );
}
