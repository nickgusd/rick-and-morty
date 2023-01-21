import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { CharacterCard } from "../components/CharacterCard.jsx";
import LoaderComponent from "../components/Loader/Loader.jsx";
import { Layout } from "../components/Layout/Layout.jsx";

export default function Episode() {
  const location = useLocation();
  const [episode, setEpisode] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [characters, setCharacters] = useState([]);
  const id = location.pathname.split("/").pop();

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/episode/${id}`)
      .then((res) => res.json())
      .then((response) => {
        setEpisode(response);
        setIsLoading(true);
        Promise.all(
          response?.characters?.map((item) => {
            return fetch(item).then((res) => res.json());
          })
        )
          .then((res) => setCharacters(res))
          .catch((err) => console.log(err))
          .finally(() => setTimeout(() => setIsLoading(false), 200));
      });
  }, [location]);

  return (
    <Layout>
      {isLoading && <LoaderComponent />}
      {Object.keys(episode).length && !isLoading ? (
        <>
          <h1>{episode.name}</h1>
          <div>{episode.episode}</div>
          <div>{episode.air_date}</div>
        </>
      ) : null}
      {!isLoading ? <CharacterCard character={characters} /> : null}
    </Layout>
  );
}
