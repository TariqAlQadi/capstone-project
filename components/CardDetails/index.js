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
    // content.isLearning = event.target.isLearning;
    // content.mastered = event.target.mastered;

    setShowEdit(false);
    router.push(`/details/${id}`);
  }

  return (
    <section>
      <button
        type="button"
        onClick={() => {
          router.back();
        }}
      >
        Go Back
      </button>
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
            <SVGIcon variant="heart" width="50px" color="red" />
          </>
        ) : (
          <>
            <SVGIcon variant="heartOutline" width="50px" color="grey" />
          </>
        )}
      </button>
      <h3>Notes:</h3>
      <p>{content?.notes[0]}</p>
      {showEdit && (
        <form onSubmit={handleSubmit}>
          <label htmlFor="notes">notes</label>
          <textarea
            type="text"
            name="notes"
            id="notes"
            defaultValue={content?.notes[0]}
          />
          <label htmlFor="tracking">isLearning</label>
          <input
            type="radio"
            name="tracking"
            id="learning"
            defaultValue={content?.isLearning}
          />

          <label htmlFor="tracking">mastered</label>
          <input
            type="radio"
            name="tracking"
            id="mastered"
            defaultValue={content?.mastered}
          />

          <button type="submit">Change</button>
        </form>
      )}
      <button
        type="button"
        onClick={() => {
          setShowEdit(!showEdit);
        }}
      >
        {showEdit ? "close edit" : "edit"}
      </button>
    </section>
  );
}
