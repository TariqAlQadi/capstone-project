import SVGIcon from "../SVGIcon";
import { useRouter } from "next/router";
import { useState } from "react";

export default function CardDetails({ content, onToggle, id }) {
  //length of the description until the first "!"
  const lengthOfDescription = content?.snippet.description.indexOf("!") + 1;
  //show edit form state
  const [showEdit, setShowEdit] = useState(false);

  const router = useRouter();

  //handle function for editform
  function handleSubmit(event) {
    event.preventDefault();
    content.notes[0] = event.target.notes.value;
    router.push(`/details/${id}`);
  }

  return (
    <section>
      <h2>{content?.snippet.title}</h2>
      <h3>by {content?.snippet.videoOwnerChannelTitle}</h3>
      <iframe
        //temporary fix for iframe size
        width={(200 * 16) / 9}
        height={200}
        src={`https://www.youtube.com/embed/${content?.snippet.resourceId.videoId}`}
        title={content?.snippet.title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
      <p>{content?.snippet.description.substring(0, lengthOfDescription)}</p>
      <button
        type="button"
        onClick={() => {
          onToggle(content?.id);
        }}
      >
        {content?.isLiked ? (
          <>
            <SVGIcon variant="heart" width="50px" />
          </>
        ) : (
          <>
            <SVGIcon variant="heartOutline" width="50px" />
          </>
        )}
      </button>
      <button
        type="button"
        onClick={() => {
          setShowEdit(!showEdit);
        }}
      >
        {showEdit ? "close edit" : "edit"}
      </button>
      {showEdit && (
        <form onSubmit={handleSubmit}>
          <label htmlFor="notes">notes</label>
          <textarea
            type="text"
            name="notes"
            id="notes"
            defaultValue={content?.notes[0]}
          />
        </form>
      )}
      <h3>Note:</h3>
      <p>{content?.notes[0]}</p>
    </section>
  );
}
