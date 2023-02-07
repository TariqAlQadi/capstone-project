import { StyledLink } from "../StyledLink/Link.styled";
import { StyledList, StyledListItem } from "./ProfileSection.styled";

export default function ProfilSection({ tutorials }) {
  return (
    <section>
      <StyledList>
        {tutorials.map((tutorial) => {
          return (
            <StyledListItem key={tutorial.id}>
              <StyledLink href={`/details/${tutorial.id}`}>
                <h3>{tutorial.snippet.title}</h3>
              </StyledLink>
            </StyledListItem>
          );
        })}
      </StyledList>
    </section>
  );
}
