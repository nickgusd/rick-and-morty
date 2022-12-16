/* eslint-disable react/prop-types */
/* eslint-disable prettier/prettier */
// import { Chip } from './Chip/Chip.jsx';
import Badge from "react-bootstrap/Badge";

import { Character, Wrapper, TextWrapper, Row } from "./CharacterCard";
export const CharacterCard = ({ character }) => {
  // console.log('character', character);
  return (
    <Wrapper>
      {character
        ? character.map((item) => (
            <Character key={item.id} to={`/character/${item.id}`}>
              {/* <Row>
            <Badge
              style={{
                display: 'flex',
                alignItems: 'center',
                border: '1px solid #6d757d',
                color: '#6d757d'
              }}
              pill
              bg="light"
            >
              {item.status}
            </Badge>
          </Row>{' '} */}
              <div>{item.name}</div>
              <img src={item.image} alt={item.name} />
              <TextWrapper>
                {/* <Row>
              <b>Origin:</b> <div>{item.origin.name}</div>
            </Row>
            <Row>
              <b>Location:</b> <div>{item.location.name}</div>
            </Row> */}
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
                  {/* <Badge
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  border: '1px solid #6d757d',
                  color: '#6d757d'
                }}
                pill
                bg="light"
              >
                {item.status}
              </Badge> */}
                </Row>
              </TextWrapper>
            </Character>
          ))
        : null}
    </Wrapper>
  );
};
