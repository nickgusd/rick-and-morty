import { useEffect, useState } from 'react';
import { useNavigate, useLocation, createSearchParams } from 'react-router-dom';
import queryString from 'query-string';

import ButtonComponent from '../components/Button/Button.jsx';
import { CharacterCard } from '../components/CharacterCard.jsx';
import Loader from '../components/Loader/Loader.jsx';
import Search from '../components/Search/Search.jsx';

import { SearchWrapper } from '../components/CharacterCard.js';
import PaginationComponent from '../components/Pagination/Pagination.jsx';

export default function Characters() {
  const navigate = useNavigate();
  const location = useLocation();
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [inputData, setInputData] = useState('');
  const [search, setSearch] = useState(false);
  const [urlParams, setUrlParams] = useState(null);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(0);
  const parse = queryString.parse(location.search);
  const params = urlParams || { name: inputData };

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
        .catch((error) => setError(error))
        .finally(() => setTimeout(() => setIsLoading(false), 200));
    };

    fetchData();
  }, [search]);

  const onSearch = () => {
    setSearch(!search);
    navigate({
      pathname: '/characters',
      search: `?${createSearchParams(params)}`
    });
  };

  const handleChange = (event) => {
    setInputData(event.target.value);
  };

  const handleClick = () => {
    onSearch();
  };

  const keyDownHandler = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      onSearch();
    }
  };

  // eslint-disable-next-line no-unused-vars
  const onPageChange = (e, { activePage }) => {
    setPage(activePage);
    setSearch(!search);
    navigate({
      pathname: '/characters',
      search: `?${createSearchParams({
        name: inputData,
        page: activePage
      })}`
    });
  };

  return (
    <div onKeyDown={keyDownHandler}>
      <h1>Characters</h1>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <SearchWrapper>
            <Search isLoading={false} onChange={handleChange} />
            <ButtonComponent onClick={handleClick} />
          </SearchWrapper>
          {!data.error && (
            <>
              <CharacterCard character={data.results} />
              <PaginationComponent
                totalPages={data?.info?.pages || 0}
                onChange={onPageChange}
                activePage={page}
              />
            </>
          )}
          {data.error && !error && <p>No Results</p>}
        </>
      )}
    </div>
  );
}
