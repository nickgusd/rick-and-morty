import { useEffect, useState } from "react";
import { useNavigate, useLocation, createSearchParams } from "react-router-dom";
import queryString from "query-string";

import ButtonComponent from "../components/Button/Button.jsx";
import { CharacterCard } from "../components/CharacterCard.jsx";
import Loader from "../components/Loader/Loader.jsx";
import Search from "../components/Search/Search.jsx";
import {
  SearchWrapper,
  ImageWrapper,
  Header,
} from "../components/CharacterCard.js";
import PaginationComponent from "../components/Pagination/Pagination.jsx";
import { Layout } from "../components/Layout/Layout.jsx";
import { Filter } from "../components/Filter/Filter.jsx";
import { FilterContainer, Flex } from "../components/Filter/Filter.js";

import RickToilet from "../assets/rick_and_morty_toilet.png";
import { title } from "../utils/string.js";

export default function Characters() {
  const navigate = useNavigate();
  const location = useLocation();
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [inputData, setInputData] = useState("");
  const [search, setSearch] = useState(false);
  const [urlParams, setUrlParams] = useState(null);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(0);
  const [gender, setGender] = useState(null);
  const [status, setStatus] = useState(null);
  const parse = queryString.parse(location.search);
  const params = urlParams || { name: inputData };

  useEffect(() => {
    setUrlParams(parse);
    setGender(null);
    setStatus(null);
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
  }, [search, location.search]);

  const onSearch = () => {
    setSearch(!search);
    navigate({
      pathname: "/characters",
      search: `?${createSearchParams(params)}`,
    });
    setPage(1);
  };

  const handleChange = (event) => {
    setInputData(event.target.value);
  };

  const handleClick = () => {
    onSearch();
  };

  const keyDownHandler = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      onSearch();
    }
  };

  const onPageChange = (e, { activePage }) => {
    setPage(activePage);
    setSearch(!search);
    navigate({
      pathname: "/characters",
      search: `?${createSearchParams({
        ...parse,
        page: activePage,
      })}`,
    });
  };

  const handleGenderFilter = (event, { value }) => {
    setGender(value);
    navigate({
      pathname: "/characters",
      search: `?${createSearchParams({
        ...parse,
        gender: event.target.innerText.toLowerCase(),
      })}`,
    });
  };

  const handleStatusChange = (event, { value }) => {
    setStatus(value);
    navigate({
      pathname: "/characters",
      search: `?${createSearchParams({
        ...parse,
        status: event.target.innerText.toLowerCase(),
      })}`,
    });
  };

  const genderOptions = [
    { key: 1, text: "Male", value: "male" },
    { key: 2, text: "Female", value: "female" },
    { key: 3, text: "Unknown", value: "unknown" },
    { key: 4, text: "Genderless", value: "Genderless" },
  ];

  const statusOptions = [
    { key: 1, text: "Alive", value: "alive" },
    { key: 2, text: "Dead", value: "dead" },
    { key: 3, text: "Unknown", value: "unknown" },
  ];

  return (
    <Layout noResults={data.error && !error} characters>
      <FilterContainer onKeyDown={keyDownHandler}>
        <SearchWrapper>
          <Search isLoading={false} onChange={handleChange} />
          <ButtonComponent onClick={handleClick} primary={true} search />
        </SearchWrapper>
        <Flex isMobile>
          <Filter
            onChange={handleGenderFilter}
            currentValue={title(parse.gender)}
            options={genderOptions}
            type="Gender"
            value={gender}
          />
          <Filter
            onChange={handleStatusChange}
            currentValue={title(parse.status)}
            options={statusOptions}
            type="Status"
            value={status}
          />
        </Flex>
      </FilterContainer>
      {data.error && !error ? (
        <Header>
          <h1>No Results Found</h1>
        </Header>
      ) : (
        <Header>
          <h1>Characters</h1>
        </Header>
      )}
      {isLoading ? (
        <Loader />
      ) : (
        <div>
          {!data.error && data && (
            <>
              <CharacterCard character={data.results} />
              <PaginationComponent
                totalPages={data?.info?.pages || 0}
                onChange={onPageChange}
                activePage={page}
              />
            </>
          )}
          {data.error && !error && (
            <ImageWrapper>
              <img src={RickToilet} alt="rick" />
            </ImageWrapper>
          )}
        </div>
      )}
    </Layout>
  );
}
