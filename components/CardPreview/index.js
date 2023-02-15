import Button from "../Button";
import {
  StyledImage,
  StyledTopLine,
  StyledSubtitle,
  StyledBottomLine,
} from "./CardPreview.styled";

export default function CardPreview({ content, _id }) {
  return (
    <Button href={`/details/${_id}`}>
      <h3>{content?.title}</h3>
      by<StyledSubtitle> {content?.videoOwnerChannelTitle}</StyledSubtitle>
      <StyledTopLine />
      <StyledImage
        src={content?.thumbnails.high.url}
        alt={content?.title}
        width={300}
        height={300}
      />
      <StyledBottomLine />
    </Button>
  );
}
