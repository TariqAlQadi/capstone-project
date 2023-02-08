import SVGIcon from "../SVGIcon";
import { useState } from "react";
import {
  StyledSection,
  StyledParagraph,
  StyledDifficulty,
} from "./CardDetails.styled";
import { currentUser } from "@/testData/globalStates";
import { useAtom } from "jotai";

export default function CardDetails({ content, onToggle, onEdit, _id }) {
  const [user] = useAtom(currentUser);

  //length of the description until the first "!"
  const lengthOfDescription = content?.snippet.description.indexOf("!") + 1;

  //show edit form state
  const [showEdit, setShowEdit] = useState(false);

  //number of all likes/learns/masters
  const numberLikes = content?.isLiked.length;
  const numberLearning = content?.isLearning.length;
  const numberMastered = content?.mastered.length;

  return (
    <StyledSection>
      <h2>{content?.snippet.title}</h2>
      <h3>by {content?.snippet.videoOwnerChannelTitle}</h3>
      <iframe
        // width should be "100%" on mobile, but for now static
        width={(200 * 16) / 9}
        height={200}
        src={`https://www.youtube.com/embed/${content?.snippet.resourceId.videoId}`}
        title={content?.snippet.title}
        allowFullScreen
      ></iframe>
      <p>Description:</p>
      <p>{content?.snippet.description.substring(0, lengthOfDescription)}</p>
      <br />
      <p>Category: {content?.category}</p>
      <p>
        Difficulty:{" "}
        <StyledDifficulty difficulty={content?.difficulty}>
          {content?.difficulty}
        </StyledDifficulty>
      </p>
      <br />
      <p>{numberLikes} people have liked this trick so far!</p>
      <p>{numberLearning} people are learning this trick right now!</p>
      <p>{numberMastered} people have mastered this trick already!</p>
      <br />
      <button
        type="button"
        onClick={() => {
          onToggle(content?._id);
        }}
      >
        {content?.isLiked.includes(user.email) ? (
          <>
            <SVGIcon variant="heart" width="20px" color="red" />
          </>
        ) : (
          <>
            <SVGIcon variant="heartOutline" width="20px" color="grey" />
          </>
        )}
      </button>
      {content?.isLearning.includes(user.email) && (
        <SVGIcon variant="learning" width="20px" color="blue" />
      )}
      {content?.mastered.includes(user.email) && (
        <SVGIcon variant="done" width="20px" color="green" />
      )}

      {content?.notes !== "" && (
        <StyledParagraph>Notes: {content?.notes}</StyledParagraph>
      )}
      <button type="button" onClick={() => setShowEdit(!showEdit)}>
        {showEdit ? (
          <SVGIcon variant="close" width="20px" color="red" />
        ) : (
          <SVGIcon variant="edit" width="20px" color="green" />
        )}
      </button>
      {showEdit && (
        <form onSubmit={onEdit}>
          <label htmlFor="notes">notes</label>
          <br />
          <textarea
            type="text"
            name="notes"
            id="notes"
            defaultValue={content?.notes}
            maxLength={200}
          />
          <br />
          <input
            type="radio"
            name="tracking"
            id="learning"
            defaultChecked={content?.isLearning.includes(user.email)}
          />
          <label htmlFor="learning">I am learning this trick!</label>
          <br />
          <input
            type="radio"
            name="tracking"
            id="mastered"
            defaultChecked={content?.mastered.includes(user.email)}
          />
          <label htmlFor="mastered">I have mastered this trick!</label>
          <br />
          <button type="submit">Submit Changes</button>
        </form>
      )}
    </StyledSection>
  );
}
