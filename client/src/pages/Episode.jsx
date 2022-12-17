/* eslint-disable prettier/prettier */
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { CharacterCard } from "../components/CharacterCard.jsx";

export default function Episode() {
  const location = useLocation();
  const [episode, setEpisode] = useState([]);
  const [characters, setCharacters] = useState([]);
  const id = location.pathname.split("/").pop();

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/episode/${id}`)
      .then((res) => res.json())
      .then((response) => {
        setEpisode(response);
        Promise.all(
          response?.characters?.map((item) => {
            return fetch(item).then((res) => res.json());
          })
        ).then((res) => setCharacters(res));
      });
  }, [location]);

  console.log("episodes", episode);

  return (
    <div>
      {Object.keys(episode).length && (
        <>
          <h1>{episode.name}</h1>
          <div>{episode.episode}</div>
          <div>{episode.air_date}</div>
        </>
      )}
      <CharacterCard character={characters} />
    </div>
  );
}
