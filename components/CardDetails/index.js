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
  StyledDescription,
  StyledButtonWrapper,
  StyledLine,
  StyledBy,
  StyledSpadesContainer,
  StyledDescriptionWrapper,
  StyledIconWrapper,
  StyledIcon,
} from "./CardDetails.styled";
import useSWR from "swr";
import Button from "../Button";
import { StyledHighlight } from "../Login/Login.styled";
import Loading from "../Loading";
import { useState } from "react";

export default function CardDetails({
  content,
  onToggleLike,
  onToggleLearning,
  onToggleMastered,
  onEditNote,
}) {
  //description state
  const [showDescription, setShowDescription] = useState(false);

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
        <StyledHighlight>
          <StyledBy>by</StyledBy> {content?.snippet.videoOwnerChannelTitle}
        </StyledHighlight>
        <StyledButtonWrapper>
          <Button
            variant="like"
            aria-label="like"
            type="button"
            onClick={onToggleLike}
          >
            {content?.isLiked.includes(user.email) ? (
              <>
                <SVGIcon
                  variant="heart"
                  width="20px"
                  color="var(--accent-color)"
                />
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
                <SVGIcon
                  variant="done"
                  width="20px"
                  color="var(--passive-color)"
                />
              </>
            )}
          </Button>
        </StyledButtonWrapper>
      </StyledSubTitle>
      <StyledLine />
      <iframe
        width="100%" //must be a fixed number on big screens
        height={192} //can be auto
        src={`https://www.youtube.com/embed/${content?.snippet.resourceId.videoId}`}
        title={content?.snippet.title}
        allowFullScreen
      ></iframe>
      <StyledIconWrapper>
        <StyledIcon>
          {numberLikes}
          <SVGIcon variant="heart" width="15px" color="var(--passive-color)" />
        </StyledIcon>

        <StyledIcon>
          {numberLearning}
          <SVGIcon
            variant="learning"
            width="15px"
            color="var(--passive-color)"
          />
        </StyledIcon>
        <StyledIcon>
          {numberMastered}
          <SVGIcon
            variant="doneAll"
            width="15px"
            color="var(--passive-color)"
          />
        </StyledIcon>
      </StyledIconWrapper>
      <StyledDescriptionWrapper>
        <StyledInfoTitle>Description:</StyledInfoTitle>
        <Button
          variant="description"
          type="button"
          aria-label={showDescription ? "hide description" : "show description"}
          onClick={() => {
            setShowDescription(!showDescription);
          }}
        >
          <StyledSpadesContainer rotate={showDescription}>
            <SVGIcon variant="spades" width="15px" />
          </StyledSpadesContainer>
        </Button>
        {showDescription && (
          <StyledDescription>
            {content?.snippet.description.substring(0, lengthOfDescription)}
          </StyledDescription>
        )}
      </StyledDescriptionWrapper>
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

      <StyledNoteForm onSubmit={onEditNote}>
        <StyledLabel htmlFor="notes">Notes:</StyledLabel>
        <StyledTextArea
          id="notes"
          name="notes"
          defaultValue={note ? note.note : ""}
          maxLength={420}
        />
        <Button type="submit" aria-label="save note" variant="note">
          Edit Note
        </Button>
      </StyledNoteForm>
    </StyledSection>
  );
}
