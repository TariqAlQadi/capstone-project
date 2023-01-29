import Image from "next/image";
import { StyledLink } from "../StyledLink/Link.styled";

export default function CardPreview({ content, id }) {
  return (
    <StyledLink href={`/details/${id}`}>
      <h3>{content.title}</h3>
      <h4>by {content.videoOwnerChannelTitle}</h4>
      <Image
        src={content.thumbnails.high.url}
        alt={content.title}
        width={300}
        height={300}
      />
    </StyledLink>
  );
}
