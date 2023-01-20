import Image from "next/image";

export default function Card({ content }) {
  return (
    <>
      <h2>{content.title}</h2>
      <h3>by {content.videoOwnerChannelTitle}</h3>
      <Image
        src={content.thumbnails.maxres.url}
        alt={content.title}
        width={300}
        height={300}
      />
    </>
  );
}
