import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { rickAndMortyActions } from "../reducers/index.js";
import { rickSelectors } from "../selectors/index.js";

import { EpisodeCard } from "../components/EpisodeCard.jsx";

export default function Episodes() {
  const dispatch = useDispatch();
  const episodes = useSelector(rickSelectors.getEpisodes) || [];

  console.log("episodes", episodes);

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/episode`)
      .then((res) => res.json())
      .then((response) => {
        dispatch(rickAndMortyActions.setEpisodes(response));
      });
  }, []);

  return (
    <div>
      <div style={{ padding: "24px" }}>
        <h1>Episodes</h1>
      </div>
      {episodes?.results?.map((item) => (
        <EpisodeCard data={item} key={item.id} href={`/episode/${item.id}`} />
      ))}
    </div>
  );
}
