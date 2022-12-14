/* eslint-disable react/prop-types */
/* eslint-disable prettier/prettier */
import { Character, Wrapper } from './CharacterCard';
export const CharacterCard = ({ character }) => {
  return (
    <Wrapper>
      {character?.map((item) => (
        <Character key={item.id}>
          <div>{item.name}</div>
          <img src={item.image} alt={item.name} />
        </Character>
      ))}
    </Wrapper>
  );
};
