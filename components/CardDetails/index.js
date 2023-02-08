import SVGIcon from "../SVGIcon";
import { useRouter } from "next/router";
import { useState } from "react";
import {
  StyledSection,
  StyledParagraph,
  StyledDifficulty,
} from "./CardDetails.styled";
import { currentUser } from "@/testData/globalStates";
import { useAtom } from "jotai";

export default function CardDetails({ content, onToggle, _id }) {
  const router = useRouter();
  const [user] = useAtom(currentUser);

  function handleEdit(event) {
    event.preventDefault();

    const notes = event.target.notes.value;
    const learning = event.target.learning.checked;
    const mastered = event.target.mastered.checked;

    list.map((tutorial) => {
      if (tutorial._id === _id) {
        let updatedIsLearning = [];
        let updatedMastered = [];
        if (learning) {
          if (!tutorial.isLearning.includes(user.email)) {
            updatedIsLearning = [...tutorial.isLearning, user.email];
          } else {
            updatedIsLearning = tutorial.isLearning.filter(
              (email) => email !== user.email
            );
          }
        }
        if (mastered) {
          if (!tutorial.mastered.includes(user.email)) {
            updatedMastered = [...tutorial.mastered, user.email];
          } else {
            updatedMastered = tutorial.mastered.filter(
              (email) => email !== user.email
            );
          }
        }
        return {
          ...tutorial,
          notes,
          isLearning: updatedIsLearning,
          mastered: updatedMastered,
        };
      }
      console.log(tutorial);
      return tutorial;
    });

    // try {
    //   const response = fetch(`/api/tutorials/${id}`, {
    //     method: "PUT",
    //     body: JSON.stringify(data),
    //     headers: { "Content-type": "application/json" },
    //   });

    //   if (response.ok) {
    //     event.target.reset();
    //     router.push("/");
    //   } else {
    //     console.error(`Error: ${response.status}`);
    //   }
    // } catch (error) {
    //   console.error(error);
    // }
  }

  //length of the description until the first "!"
  const lengthOfDescription = content?.snippet.description.indexOf("!") + 1;

  //show edit form state
  const [showEdit, setShowEdit] = useState(false);

  //number of all likes/learns/masters
  const numberLikes = content?.isLiked.length;
  const numberLearning = content?.isLearning.length;
  const numberMastered = content?.mastered.length;

  //handle submit that toggles user email between "learning"/"mastered" + notes input
  // function handleEdit(event) {
  //   event.preventDefault();

  //   const notes = event.target.notes.value;
  //   const learning = event.target.learning.checked;
  //   const mastered = event.target.mastered.checked;

  //   setList(
  //     list.map((tutorial) => {
  //       if (tutorial.id === id) {
  //         let updatedIsLearning = [];
  //         let updatedMastered = [];
  //         if (learning) {
  //           if (!tutorial.isLearning.includes(user.email)) {
  //             updatedIsLearning = [...tutorial.isLearning, user.email];
  //           } else {
  //             updatedIsLearning = tutorial.isLearning.filter(
  //               (email) => email !== user.email
  //             );
  //           }
  //         }
  //         if (mastered) {
  //           if (!tutorial.mastered.includes(user.email)) {
  //             updatedMastered = [...tutorial.mastered, user.email];
  //           } else {
  //             updatedMastered = tutorial.mastered.filter(
  //               (email) => email !== user.email
  //             );
  //           }
  //         }
  //         return {
  //           ...tutorial,
  //           notes,
  //           isLearning: updatedIsLearning,
  //           mastered: updatedMastered,
  //         };
  //       }
  //       return tutorial;
  //     })
  //   );

  //reset after submit
  //   setShowEdit(false);
  //   router.push(`/details/${id}`);
  // }

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
        <form onSubmit={handleEdit}>
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
