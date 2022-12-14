/* eslint-disable prettier/prettier */
import { useEffect, useState } from 'react';
import { CharacterCard } from '../components/CharacterCard.jsx';
import Loader from '../components/Loader/Loader.jsx';
import portal from '../../src/assets/portal.png';
// import { useNavigate } from "react-dom"

export default function Locations() {
  const [data, setData] = useState([]);
  const [character, setCharacters] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [isEmpty, setIsEmpty] = useState(false);
  //  const navigate = useNavigate()

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/location/${page}`)
      .then((res) => res.json())
      .then((response) => {
        // console.log('response', response);
        if (response.residents.length === 0) {
          setIsEmpty(true);
          setPage(page + 1);
        }
        setIsLoading(true);
        setData(response);
        Promise.all(response.residents.map((u) => fetch(u)))
          .then((responses) => Promise.all(responses.map((res) => res.json())))
          .then((texts) => {
            setCharacters(texts);
          })
          .finally(() => {
            setTimeout(() => setIsLoading(false), 200);
            // setIsLoading(false);
          });
      });
  }, [page, isEmpty]);

  //   console.log("characters", character);

  return (
    <div>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <h1>{data.name}</h1>
          <img
            src={portal}
            onClick={() => setPage(page + 1)}
            style={{ width: '200px', cursor: 'pointer' }}
          />
          <CharacterCard character={character} />
        </>
      )}
    </div>
  );
}
