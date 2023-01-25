import Image from "next/image";
import Link from "next/link";

export default function CardPreview({ content, id }) {
  // console.log(content.thumbnails.high.url);
  return (
    <Link href={`/details/${id}`}>
      <h2>{content.title}</h2>
      <h3>by {content.videoOwnerChannelTitle}</h3>
      {/* <Image
        src={content.thumbnails.maxres.url}
        alt={content.title}
        width={300}
        height={300}
      /> */}
    </Link>
  );
}
