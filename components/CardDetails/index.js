export default function CardDetails({ content }) {
  return (
    <>
      <h2>{content.title}</h2>
      <h3>by {content.videoOwnerChannelTitle}</h3>
      <iframe
        width="654"
        height="368"
        src={`https://www.youtube.com/embed/${content.resourceId.videoId}`}
        title={content.title}
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
      <p>{content.description}</p>
    </>
  );
}
