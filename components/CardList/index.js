import CardPreview from "../CardPreview";
import { StyledList } from "./CardList.styled";

export default function CardList({ tutorials }) {
  return (
    <StyledList>
      {tutorials.map((tutorial) => {
        return (
          <li key={tutorial.id}>
            <CardPreview content={tutorial.snippet} id={tutorial.id} />
          </li>
        );
      })}
    </StyledList>
  );
}
