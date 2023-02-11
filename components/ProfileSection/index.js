import { StyledLink } from "../StyledLink/Link.styled";
import {
  StyledList,
  StyledListItem,
  StyledProfileSection,
} from "./ProfileSection.styled";

export default function ProfilSection({ tutorials }) {
  return (
    <>
      <StyledList>
        {tutorials.map((tutorial) => {
          return (
            <StyledListItem key={tutorial._id}>
              <StyledLink href={`/details/${tutorial._id}`}>
                <h3>{tutorial.snippet.title}</h3>
              </StyledLink>
            </StyledListItem>
          );
        })}
      </StyledList>
    </>
  );
}
