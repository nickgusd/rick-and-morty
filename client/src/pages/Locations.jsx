import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { gql } from "@apollo/client";
import { useQuery } from "@apollo/react-hooks";

import { CharacterCard } from "../components/CharacterCard.jsx";
import Loader from "../components/Loader/Loader.jsx";
import portal from "../../src/assets/portal.png";
import { Layout } from "../components/Layout/Layout.jsx";
import ButtonComponent from "../components/Button/Button.jsx";

export default function Locations() {
  const navigate = useNavigate();
  const router = useLocation();
  const id = router.pathname.split("/").pop();
  const [index, setIndex] = useState(id !== "location" ? Number(id) : 0);
  const [loadMore, setLoadMore] = useState(false);

  const GET_LOCATION_CHARACTERS_QUERY = gql`
    query getLocationCharacters($id: ID! = 1) {
      location(id: $id) {
        id
        name
        type
        residents {
          id
          name
          created
          type
          gender
          species
          status
          image
          origin {
            created
            dimension
            id
            name
            type
          }
        }
      }
    }
  `;

  const { data, loading, refetch } = useQuery(GET_LOCATION_CHARACTERS_QUERY, {
    fetchPolicy: "network-only",
    variables: { id: id !== "location" ? id : 1 },
  });

  useEffect(() => {
    if (id === "location") {
      setIndex(0);
    }
    const hasCharacters = data?.location?.residents?.length;
    if (hasCharacters < 20 && !loading) {
      setLoadMore(false);
    }
    refetch({ id: id });
    if (hasCharacters === 0 && !loading) {
      navigate(`/location/${Number(id) + 1}`);
    }
  }, [loading, index, router]);

  const handleNavigate = () => {
    setIndex(index + 1);
    navigate({
      pathname: `/location/${index}`,
    });
  };

  return (
    <Layout>
      {loading ? (
        <Loader />
      ) : id !== "location" ? (
        <>
          <h1>{data?.location?.name}</h1>
          <img
            src={portal}
            onClick={handleNavigate}
            style={{ width: "200px", cursor: "pointer" }}
          />
          <CharacterCard
            character={data?.location?.residents}
            loadMore={loadMore}
          />
          {!loadMore && data?.location?.residents?.length > 20 && (
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
            onClick={() => handleNavigate(true)}
            style={{ width: "200px", cursor: "pointer" }}
          />
        </>
      )}
    </Layout>
  );
}
