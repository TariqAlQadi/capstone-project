import SVGIcon from "../SVGIcon";
import { useState } from "react";
import { StyledSection, StyledDifficulty } from "./CardDetails.styled";

export default function CardDetails({
  content,
  onToggleLike,
  onToggleLearning,
  onToggleMastered,
}) {
  //length of the description until the first "!"
  const lengthOfDescription = content?.snippet.description.indexOf("!") + 1;

  //show edit form state
  const [showEdit, setShowEdit] = useState(false);

  //get logged-in user
  const user = JSON.parse(localStorage.getItem("loggedInUser"));

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
      <button aria-label="like" type="button" onClick={onToggleLike}>
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

      <button aria-label="learing" type="button" onClick={onToggleLearning}>
        {content?.isLearning.includes(user.email) ? (
          <>
            <SVGIcon variant="learning" width="20px" color="blue" />
          </>
        ) : (
          <>
            <SVGIcon variant="learningOutline" width="20px" color="grey" />
          </>
        )}
      </button>

      <button aria-label="mastered" type="button" onClick={onToggleMastered}>
        {content?.mastered.includes(user.email) ? (
          <>
            <SVGIcon variant="doneAll" width="20px" color="green" />
          </>
        ) : (
          <>
            <SVGIcon variant="done" width="20px" color="grey" />
          </>
        )}
      </button>
    </StyledSection>
  );
}
