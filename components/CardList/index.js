import CardPreview from "../CardPreview";
import { StyledList, StyledListItem } from "./CardList.styled";

export default function CardList({ tutorials }) {
  const shuffledTutorials = tutorials.sort((a, b) => 0.5 - Math.random());

  return (
    <StyledList>
      {shuffledTutorials.map((tutorial) => {
        return (
          <StyledListItem key={tutorial.id}>
            <CardPreview content={tutorial.snippet} _id={tutorial._id} />
          </StyledListItem>
        );
      })}
    </StyledList>
  );
}
