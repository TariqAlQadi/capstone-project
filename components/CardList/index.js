import CardPreview from "../CardPreview";
import { StyledList } from "./CardList.styled";

export default function CardList({ tutorials }) {
  const shuffledTutorials = tutorials.sort((a, b) => 0.5 - Math.random());

  return (
    <StyledList>
      {shuffledTutorials.map((tutorial) => {
        return (
          <li key={tutorial.id}>
            <CardPreview content={tutorial.snippet} id={tutorial.id} />
          </li>
        );
      })}
    </StyledList>
  );
}
