import SVGIcon from "../SVGIcon";

export default function CardDetails({ content, onToggle }) {
  // //length of the description until the first "!"
  const lengthOfDescription = content?.snippet.description.indexOf("!") + 1;

  return (
    <>
      <h2>{content?.snippet.title}</h2>
      <h3>by {content?.snippet.videoOwnerChannelTitle}</h3>
      <iframe
        width="654"
        height="368"
        src={`https://www.youtube.com/embed/${content?.snippet.resourceId.videoId}`}
        title={content?.snippet.title}
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
      <p>{content?.snippet.description.substring(0, lengthOfDescription)}</p>

      <button
        type="button"
        onClick={() => {
          onToggle(content.id);
        }}
      >
        {content?.isLiked ? (
          <>
            <SVGIcon variant="bookmarked" width="50px" />
          </>
        ) : (
          <>
            <SVGIcon variant="notBookmarked" width="50px" />
          </>
        )}
      </button>
    </>
  );
}
