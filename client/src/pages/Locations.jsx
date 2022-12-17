/* eslint-disable prettier/prettier */
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { CharacterCard } from "../components/CharacterCard.jsx";
import Loader from "../components/Loader/Loader.jsx";
import portal from "../../src/assets/portal.png";
import { Layout } from "../components/Layout/Layout.jsx";
import { rickAndMortyActions } from "../reducers/index.js";
import { rickSelectors } from "../selectors/index.js";
import ButtonComponent from "../components/Button/Button.jsx";

export default function Locations() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const router = useLocation();
  const [data, setData] = useState([]);
  const [character, setCharacters] = useState([]);
  const [index, setIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [loadMore, setLoadMore] = useState(false);
  const id = router.pathname.split("/").pop();

  const locations = useSelector(rickSelectors.getLocations) || [];

  const hasCharacters =
    locations?.results
      ?.filter((item) => item.residents.length)
      ?.map((item) => item?.id) || [];

  useEffect(() => {
    const fetchLocations = () => {
      console.log("fetched");
      fetch(`https://rickandmortyapi.com/api/location`)
        .then((res) => res.json())
        .then((data) => {
          dispatch(rickAndMortyActions.setLocations(data));
        });
    };

    fetchLocations();
  }, []);

  useEffect(() => {
    if (index === hasCharacters.length) {
      setIndex(0);
    }

    if (character.length < 20) {
      setLoadMore(false);
    }

    fetch(`https://rickandmortyapi.com/api/location/${id || 1}`)
      .then((res) => res.json())
      .then((response) => {
        if (id !== "location") setIsLoading(true);
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
      pathname: `/location/${hasCharacters[index]}`
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
          <CharacterCard character={character} loadMore={loadMore} />
          {!loadMore && character?.length > 20 && (
            <ButtonComponent
              onClick={() => setLoadMore(!loadMore)}
              secondary
              content={"Load More"}
            >
              Load More
            </ButtonComponent>
          )}
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
