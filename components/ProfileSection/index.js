import Button from "../Button";
import { StyledList, StyledListItem } from "./ProfileSection.styled";
import { StyledImage } from "../CardPreview/CardPreview.styled";

export default function ProfilSection({ tutorials }) {
  return (
    <>
      <StyledList>
        {tutorials.map((tutorial) => {
          return (
            <StyledListItem key={tutorial._id}>
              <Button href={`/details/${tutorial._id}`} variant="profileList">
                <StyledImage
                  src={tutorial.snippet.thumbnails.high.url}
                  alt={tutorial.snippet.title}
                  width={50}
                  height={50}
                ></StyledImage>
                <h3>{tutorial.snippet.title}</h3>
              </Button>
            </StyledListItem>
          );
        })}
      </StyledList>
    </>
  );
}
