import Button from "../Button";
import {
  StyledList,
  StyledListItem,
  StyledArtist,
  StyledItemTitle,
} from "./ProfileSection.styled";
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
                <div>
                  <StyledItemTitle>{tutorial.snippet.title}</StyledItemTitle>
                  <p>
                    by{" "}
                    <StyledArtist>
                      {tutorial.snippet.videoOwnerChannelTitle}
                    </StyledArtist>
                  </p>
                </div>
              </Button>
            </StyledListItem>
          );
        })}
      </StyledList>
    </>
  );
}
