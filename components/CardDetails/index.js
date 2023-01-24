import { useState } from "react";
import SVGIcon from "../SVGIcon";

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

      <button type="button" onClick={toggleBookmark(tutorial.id)}>
        {tutorial.isBookmarked ? (
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
