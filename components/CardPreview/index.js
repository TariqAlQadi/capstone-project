import { StyledLink } from "../StyledLink/Link.styled";
import { StyledImage, StyledSubtitle } from "./CardPreview.styled";

export default function CardPreview({ content, _id }) {
  return (
    <StyledLink href={`/details/${_id}`}>
      <h3>{content?.title}</h3>
      <StyledSubtitle>by {content?.videoOwnerChannelTitle}</StyledSubtitle>
      <StyledImage
        src={content?.thumbnails.high.url}
        alt={content?.title}
        width={300}
        height={300}
      />
    </StyledLink>
  );
}
