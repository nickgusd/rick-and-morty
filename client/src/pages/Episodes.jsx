import { useNavigate, createSearchParams, useLocation } from "react-router-dom";

import { gql } from "@apollo/client";
import { useQuery } from "@apollo/react-hooks";
import queryString from "query-string";

import { EpisodeCard } from "../components/EpisodeCard.jsx";
import { Layout } from "../components/Layout/Layout.jsx";
import { Container } from "./CharactersStyles.js";
import PaginationComponent from "../components/Pagination/Pagination";
import Loader from "../components/Loader/Loader.jsx";

export default function Episodes() {
  const navigate = useNavigate();
  const location = useLocation();
  const parse = queryString.parse(location.search);

  const GET_EPISODES_QUERY = gql`
    query getEpisodes($page: Int) {
      episodes(page: $page) {
        info {
          count
          pages
        }
        results {
          id
          name
          air_date
          created
          episode
        }
      }
    }
  `;

  const { data, loading } = useQuery(GET_EPISODES_QUERY, {
    // fetchPolicy: "network-only",
    variables: { page: Number(parse.page) },
  });

  const onPageChange = (e, { activePage }) => {
    navigate({
      pathname: "/episodes",
      search: `?${createSearchParams({
        page: activePage,
      })}`,
    });
  };

  return (
    <Layout>
      <div>
        {loading ? (
          <Loader />
        ) : (
          <Container>
            <h1>Episodes</h1>
            {data?.episodes?.results?.map((item) => (
              <EpisodeCard
                data={item}
                key={item.id}
                href={`/episode/${item.id}`}
              />
            ))}
            <div>
              {data && (
                <PaginationComponent
                  totalPages={data?.episodes?.info?.pages || 0}
                  activePage={parse.page || 1}
                  onChange={onPageChange}
                />
              )}
            </div>
          </Container>
        )}
      </div>
    </Layout>
  );
}
