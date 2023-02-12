import Button from "../Button";
import { StyledList, StyledListItem } from "./ProfileSection.styled";

export default function ProfilSection({ tutorials }) {
  return (
    <>
      <StyledList>
        {tutorials.map((tutorial) => {
          return (
            <StyledListItem key={tutorial._id}>
              <Button href={`/details/${tutorial._id}`}>
                <h3>{tutorial.snippet.title}</h3>
              </Button>
            </StyledListItem>
          );
        })}
      </StyledList>
    </>
  );
}
