import { StyledLink } from "../StyledLink/Link.styled";
import {
  StyledImage,
  StyledTopLine,
  StyledSubtitle,
  StyledBottomLine,
} from "./CardPreview.styled";

export default function CardPreview({ content, _id }) {
  return (
    <StyledLink href={`/details/${_id}`}>
      <h3>{content?.title}</h3>
      <StyledSubtitle>by {content?.videoOwnerChannelTitle}</StyledSubtitle>
      <StyledTopLine />
      <StyledImage
        src={content?.thumbnails.high.url}
        alt={content?.title}
        width={300}
        height={300}
      />
      <StyledBottomLine />
    </StyledLink>
  );
}
