/* eslint-disable react/prop-types */
/* eslint-disable prettier/prettier */
// import { Chip } from './Chip/Chip.jsx';

import Badge from "react-bootstrap/Badge";

import { Character, Wrapper, TextWrapper, Row } from "./CharacterCard";
export const CharacterCard = ({ character, loadMore }) => {
  const initial = character?.slice(0, 20);

  return (
    <Wrapper>
      {(character?.length > 20 && !loadMore ? initial : character)?.map(
        (item) => (
          <Character key={item.id} to={`/character/${item.id}`}>
            <div>{item.name}</div>
            <img src={item.image} alt={item.name} />
            <TextWrapper>
              <Row>
                <Badge
                  pill
                  bg="light"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    border: "1px solid #6d757d",
                    color: "#6d757d"
                  }}
                >
                  {item.species}
                </Badge>
                <Badge
                  bg="light"
                  pill
                  style={{
                    display: "flex",
                    alignItems: "center",
                    border: "1px solid #6d757d",
                    color: "#6d757d"
                  }}
                >
                  {item.gender}
                </Badge>
              </Row>
            </TextWrapper>
          </Character>
        )
      )}
    </Wrapper>
  );
};
