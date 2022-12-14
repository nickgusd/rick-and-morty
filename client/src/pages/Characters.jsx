import { useEffect, useState } from 'react';
import { useNavigate, useLocation, createSearchParams } from 'react-router-dom';
import queryString from 'query-string';

import ButtonComponent from '../components/Button/Button.jsx';
import { CharacterCard } from '../components/CharacterCard.jsx';
import Loader from '../components/Loader/Loader.jsx';
import Search from '../components/Search/Search.jsx';

import { SearchWrapper } from '../components/CharacterCard.js';

export default function Characters() {
  const navigate = useNavigate();
  const location = useLocation();

  const [data, setData] = useState([]);

  // const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [inputData, setInputData] = useState('');
  const [search, setSearch] = useState(false);
  const [urlParams, setUrlParams] = useState(null);
  const parse = queryString.parse(location.search);
  const params = urlParams || { name: inputData, status: 'alive' };

  useEffect(() => {
    setUrlParams(parse);
  }, []);

  useEffect(() => {
    const fetchData = () => {
      fetch(`https://rickandmortyapi.com/api/character${location.search}`)
        .then((res) => res.json())
        .then((response) => {
          setIsLoading(true);
          setData(response);
          setUrlParams(null);
        })
        .catch((error) => console.log(error))
        .finally(() => setTimeout(() => setIsLoading(false), 200));
    };

    fetchData();
  }, [search]);

  const handleChange = (event) => {
    setInputData(event.target.value);
  };

  const handleClick = () => {
    setSearch(!search);
    navigate({
      pathname: '/characters',
      search: `?${createSearchParams(params)}`
    });
  };

  return (
    <div>
      <h1>Characters</h1>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <SearchWrapper>
            <Search isLoading={false} onChange={handleChange} />
            <ButtonComponent onClick={handleClick} />
          </SearchWrapper>
          <CharacterCard character={data.results} />
        </>
      )}
    </div>
  );
}
