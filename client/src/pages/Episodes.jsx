import { useEffect, useState } from "react";
import { useNavigate, createSearchParams, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { rickAndMortyActions } from "../reducers/index.js";
import { rickSelectors } from "../selectors/index.js";

import { EpisodeCard } from "../components/EpisodeCard.jsx";
import { Layout } from "../components/Layout/Layout.jsx";
import PaginationComponent from "../components/Pagination/Pagination";
import Loader from "../components/Loader/Loader.jsx";

export default function Episodes() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const episodes = useSelector(rickSelectors.getEpisodes) || [];
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/episode${location.search}`)
      .then((res) => res.json())
      .then((response) => {
        setIsLoading(true);
        dispatch(rickAndMortyActions.setEpisodes(response));
      })
      .catch((err) => console.log(err))
      .finally(() => setTimeout(() => setIsLoading(false), 200));
  }, [page]);

  const onPageChange = (e, { activePage }) => {
    setPage(activePage);
    navigate({
      pathname: "/episodes",
      search: `?${createSearchParams({
        page: activePage
      })}`
    });
  };

  return (
    <Layout>
      <div>
        {isLoading ? (
          <Loader />
        ) : (
          <>
            <h1>Episodes</h1>
            {episodes?.results?.map((item) => (
              <EpisodeCard
                data={item}
                key={item.id}
                href={`/episode/${item.id}`}
              />
            ))}
            <div>
              {episodes && (
                <PaginationComponent
                  totalPages={episodes?.info?.pages || 0}
                  activePage={page}
                  onChange={onPageChange}
                />
              )}
            </div>
          </>
        )}
      </div>
    </Layout>
  );
}
