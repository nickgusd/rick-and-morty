import { useEffect, useState } from "react";
import { useNavigate, useLocation, createSearchParams } from "react-router-dom";
import queryString from "query-string";
import { gql } from "@apollo/client";
import { useQuery } from "@apollo/react-hooks";

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
import { NoResults, PaginationWrapper } from "./CharactersStyles.js";

import RickToilet from "../assets/rick_and_morty_toilet.png";
import { title } from "../utils/string.js";

export default function Characters() {
  const navigate = useNavigate();
  const location = useLocation();
  const [inputData, setInputData] = useState("");
  const [search, setSearch] = useState(false);
  const [urlParams, setUrlParams] = useState(null);
  const [gender, setGender] = useState(null);
  const [status, setStatus] = useState(null);
  const parse = queryString.parse(location.search);
  const params = urlParams || { name: inputData };

  const GET_CHARACTERS_QUERY = gql`
    query GetCharacters(
      $page: Int
      $name: String
      $status: String
      $gender: String
    ) {
      characters(
        page: $page
        filter: { name: $name, status: $status, gender: $gender }
      ) {
        info {
          count
          pages
        }
        results {
          id
          created
          name
          image
          status
          species
          type
          gender
          origin {
            id
            name
          }
          location {
            id
            name
          }
          episode {
            id
            name
          }
        }
      }
    }
  `;

  const { data, loading, error } = useQuery(GET_CHARACTERS_QUERY, {
    variables: {
      page: Number(parse.page),
      name: parse.name,
      gender: parse.gender,
      status: parse.status,
    },
  });

  useEffect(() => {
    setUrlParams(parse);
    setGender(null);
    setStatus(null);

    if (location.search === "") {
      setInputData("");
    }
  }, [search, location.search]);

  const onSearch = () => {
    setSearch(!search);
    navigate({
      pathname: "/characters",
      search: `?${createSearchParams({ ...params, page: 1, name: inputData })}`,
    });
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
        page: 1,
        gender: value,
      })}`,
    });
  };

  const handleStatusChange = (event, { value }) => {
    setStatus(value);
    navigate({
      pathname: "/characters",
      search: `?${createSearchParams({
        ...parse,
        page: 1,
        status: value,
      })}`,
    });
  };

  const genderOptions = [
    { key: 1, text: "Male", value: "male" },
    { key: 2, text: "Female", value: "female" },
    { key: 3, text: "Unknown", value: "unknown" },
    { key: 4, text: "Genderless", value: "genderless" },
  ];

  const statusOptions = [
    { key: 1, text: "Alive", value: "alive" },
    { key: 2, text: "Dead", value: "dead" },
    { key: 3, text: "Unknown", value: "unknown" },
  ];

  return (
    <Layout characters>
      <FilterContainer onKeyDown={keyDownHandler}>
        <SearchWrapper>
          <Search isLoading={false} onChange={handleChange} value={inputData} />
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
      {loading ? (
        <Loader />
      ) : (
        <>
          {!error && data?.characters?.results?.length > 0 && (
            <>
              <Header>
                <h1>Characters</h1>
              </Header>
              <CharacterCard character={data?.characters?.results} />
              <PaginationWrapper>
                <PaginationComponent
                  totalPages={data?.characters?.info?.pages || 0}
                  onChange={onPageChange}
                  activePage={parse.page || 1}
                />
              </PaginationWrapper>
            </>
          )}
          {!error && !data?.characters?.results?.length > 0 && (
            <ImageWrapper>
              <NoResults>
                <h1>No Results Found</h1>
              </NoResults>
              <img src={RickToilet} alt="rick" />
            </ImageWrapper>
          )}
        </>
      )}
    </Layout>
  );
}
