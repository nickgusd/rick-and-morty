/* eslint-disable prettier/prettier */
import { useEffect, useState } from "react";
import { useLocation, useNavigate, createSearchParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { CharacterCard } from "../components/CharacterCard.jsx";
import Loader from "../components/Loader/Loader.jsx";
import portal from "../../src/assets/portal.png";
import { Layout } from "../components/Layout/Layout.jsx";
import { rickAndMortyActions } from "../reducers/index.js";
import { rickSelectors } from "../selectors/index.js";
import PaginationComponent from "../components/Pagination/Pagination";

export default function Locations() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const router = useLocation();
  const [data, setData] = useState([]);
  const [character, setCharacters] = useState([]);
  const [index, setIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(1);
  const id = router.pathname.split("/").pop();

  const locations = useSelector(rickSelectors.getLocations) || [];

  const hasCharacters =
    locations?.results
      ?.filter((item) => item.residents.length)
      ?.map((item) => item?.id) || [];

  const totalPages = locations?.info?.pages;

  useEffect(() => {
    const fetchLocations = () => {
      console.log("fetched");
      fetch(`https://rickandmortyapi.com/api/location`)
        .then((res) => res.json())
        .then((data) => {
          console.log("locations", data);
          dispatch(rickAndMortyActions.setLocations(data));
        });
    };

    fetchLocations();
  }, []);

  useEffect(() => {
    if (index === hasCharacters.length) {
      setIndex(0);
    }
    fetch(
      `https://rickandmortyapi.com/api/location/${id || 1}${router.search}}`
    )
      .then((res) => res.json())
      .then((response) => {
        setIsLoading(true);
        setData(response);
        Promise.all(response?.residents?.map((u) => fetch(u)))
          .then((responses) => Promise.all(responses.map((res) => res.json())))
          .then((texts) => {
            setCharacters(texts);
          })
          .finally(() => {
            setTimeout(() => setIsLoading(false), 200);
          });
      });
  }, [index, router.search]);

  const handleNavigate = () => {
    setIndex(index + 1);
    navigate({
      pathname: `/location/${hasCharacters[index]}`,
      search: `?${createSearchParams({ page: page })}`
    });
  };

  const handlePageChange = () => {
    setPage(page + 1);
    navigate({
      pathname: `/location/${hasCharacters[index]}`,
      search: `?${createSearchParams({ page: page })}`
    });
  };

  return (
    <Layout>
      {isLoading ? (
        <Loader />
      ) : id !== "location" ? (
        <>
          <h1>{data.name}</h1>
          <img
            src={portal}
            onClick={handleNavigate}
            style={{ width: "200px", cursor: "pointer" }}
          />
          <CharacterCard character={character} />
          <PaginationComponent
            totalPages={totalPages}
            onChange={handlePageChange}
            activePage={page}
          />
        </>
      ) : (
        <>
          <h3>Click on the portal</h3>
          <img
            src={portal}
            onClick={handleNavigate}
            style={{ width: "200px", cursor: "pointer" }}
          />
        </>
      )}
    </Layout>
  );
}
