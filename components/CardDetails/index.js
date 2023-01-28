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
    content.notes = event.target.notes.value;
    content.isLearning = event.target.learning.checked;
    content.mastered = event.target.mastered.checked;

    //reset after submit
    setShowEdit(false);
    router.push(`/details/${id}`);
  }

  return (
    <section>
      <h2>{content?.snippet.title}</h2>
      <h3>by {content?.snippet.videoOwnerChannelTitle}</h3>
      <iframe
        width="100%"
        height="240"
        src={`https://www.youtube.com/embed/${content?.snippet.resourceId.videoId}`}
        title={content?.snippet.title}
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
            <SVGIcon variant="heart" width="20px" color="red" />
          </>
        ) : (
          <>
            <SVGIcon variant="heartOutline" width="20px" color="grey" />
          </>
        )}
      </button>
      {content?.isLearning && (
        <SVGIcon variant="learningOutline" width="20px" color="blue" />
      )}
      {content?.mastered && (
        <SVGIcon variant="done" width="20px" color="green" />
      )}

      {/* <p>Release: {content?.snippet.publishedAt}</p> */}
      <p>Category: {content?.category}</p>
      <p>Difficulty: {content?.difficulty}</p>
      <p>Notes: {content?.notes}</p>

      {showEdit && (
        <form onSubmit={handleSubmit}>
          <label htmlFor="notes">notes</label>
          <textarea
            type="text"
            name="notes"
            id="notes"
            defaultValue={content?.notes[0]}
          />

          <input
            type="radio"
            name="tracking"
            id="learning"
            defaultChecked={content?.isLearning}
          />
          <label htmlFor="learning">learning</label>

          <input
            type="radio"
            name="tracking"
            id="mastered"
            defaultChecked={content?.mastered}
          />
          <label htmlFor="mastered">mastered</label>

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
