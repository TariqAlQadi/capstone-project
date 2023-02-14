import SVGIcon from "../SVGIcon";
import {
  StyledSection,
  StyledDifficulty,
  StyledNoteForm,
  StyledTextArea,
  StyledLabel,
  StyledTitle,
  StyledSubTitle,
  StyledInfoTitle,
  StyledInfoText,
} from "./CardDetails.styled";
import useSWR from "swr";
import Button from "../Button";
import { StyledHighlight } from "../Login/Login.styled";
import Loading from "../Loading";

export default function CardDetails({
  content,
  onToggleLike,
  onToggleLearning,
  onToggleMastered,
  onEditNote,
}) {
  //length of the description until the first "!"
  const lengthOfDescription = content?.snippet.description.indexOf("!") + 1;

  //get logged-in user
  const { data: user } = useSWR(`/api/users`);

  if (!user) {
    return <Loading />;
  }

  //number of all likes/learns/masters
  const numberLikes = content?.isLiked.length;
  const numberLearning = content?.isLearning.length;
  const numberMastered = content?.mastered.length;

  //get user notes
  const noteObject = content?.notes.filter((note) => note.user === user.email);
  const [note] = noteObject;

  return (
    <StyledSection>
      <StyledTitle>{content?.snippet.title}</StyledTitle>
      <StyledSubTitle>
        by{" "}
        <StyledHighlight>
          {content?.snippet.videoOwnerChannelTitle}
        </StyledHighlight>
      </StyledSubTitle>
      <iframe
        width="100%" //must be a fixed number on big screens
        height={200} //can be auto
        src={`https://www.youtube.com/embed/${content?.snippet.resourceId.videoId}`}
        title={content?.snippet.title}
        allowFullScreen
      ></iframe>

      <StyledInfoTitle>Description:</StyledInfoTitle>
      <StyledInfoText>
        {content?.snippet.description.substring(0, lengthOfDescription)}
      </StyledInfoText>
      <StyledInfoTitle>
        Category:
        <StyledInfoText> {content?.category}</StyledInfoText>
      </StyledInfoTitle>

      <StyledInfoTitle>
        Difficulty:{" "}
        <StyledDifficulty difficulty={content?.difficulty}>
          {content?.difficulty}
        </StyledDifficulty>
      </StyledInfoTitle>

      <p>{numberLikes} people have liked this trick so far!</p>
      <p>{numberLearning} people are learning this trick right now!</p>
      <p>{numberMastered} people have mastered this trick already!</p>

      <Button
        variant="like"
        aria-label="like"
        type="button"
        onClick={onToggleLike}
      >
        {content?.isLiked.includes(user.email) ? (
          <>
            <SVGIcon variant="heart" width="20px" color="var(--accent-color)" />
          </>
        ) : (
          <>
            <SVGIcon
              variant="heartOutline"
              width="20px"
              color="var(--passive-color)"
            />
          </>
        )}
      </Button>

      <Button
        variant="learning"
        aria-label="learing"
        type="button"
        onClick={onToggleLearning}
      >
        {content?.isLearning.includes(user.email) ? (
          <>
            <SVGIcon
              variant="learning"
              width="20px"
              color="var(--accent-color)"
            />
          </>
        ) : (
          <>
            <SVGIcon
              variant="learningOutline"
              width="20px"
              color="var(--passive-color)"
            />
          </>
        )}
      </Button>

      <Button
        variant="mastered"
        aria-label="mastered"
        type="button"
        onClick={onToggleMastered}
      >
        {content?.mastered.includes(user.email) ? (
          <>
            <SVGIcon
              variant="doneAll"
              width="20px"
              color="var(--accent-color)"
            />
          </>
        ) : (
          <>
            <SVGIcon variant="done" width="20px" color="var(--passive-color)" />
          </>
        )}
      </Button>

      <StyledNoteForm onSubmit={onEditNote}>
        <StyledLabel htmlFor="notes">Notes</StyledLabel>
        <StyledTextArea
          id="notes"
          name="notes"
          defaultValue={note ? note.note : ""}
          maxLength={420}
        />
        <Button type="submit">Edit Note</Button>
      </StyledNoteForm>
    </StyledSection>
  );
}
