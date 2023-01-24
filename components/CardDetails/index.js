import { useState } from "react";

export default function CardDetails({ content }) {
  //isBookmarked state
  const [isBookmarked, setIsBookmarked] = useState(false);
  //length of the description until the first "!"
  const lengthOfDescription = content.description.indexOf("!") + 1;

  //bookmark toggle function
  function handleToggleBookmark() {
    setIsBookmarked(!isBookmarked);
  }

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
      <p>{content.description.substring(0, lengthOfDescription)}</p>
      <button type="button" onClick={handleToggleBookmark}>
        {isBookmarked ? (
          <svg viewBox="0 0 384 512" width="20px" height="20px">
            <path d="M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z" />
          </svg>
        ) : (
          <svg viewBox="0 0 384 512" width="20px" height="20px">
            <path d="M336 0h-288C21.49 0 0 21.49 0 48v431.9c0 24.7 26.79 40.08 48.12 27.64L192 423.6l143.9 83.93C357.2 519.1 384 504.6 384 479.9V48C384 21.49 362.5 0 336 0zM336 452L192 368l-144 84V54C48 50.63 50.63 48 53.1 48h276C333.4 48 336 50.63 336 54V452z" />
          </svg>
        )}
      </button>
    </>
  );
}
