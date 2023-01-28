import Image from "next/image";
import { StyledLink } from "../StyledLink/Link.styled";

export default function CardPreview({ content, id }) {
  return (
    <StyledLink href={`/details/${id}`}>
      <h2>{content.title}</h2>
      <h3>by {content.videoOwnerChannelTitle}</h3>
      <Image
        src={content.thumbnails.high.url}
        alt={content.title}
        width={300}
        height={300}
      />
    </StyledLink>
  );
}
