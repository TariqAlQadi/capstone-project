import Image from "next/image";
import { useAtom } from "jotai";
import { allTutorials, userObject } from "@/testData/globalStates";
import styled, { css } from "styled-components";
import { useState } from "react";

export default function Profil() {
  const [list] = useAtom(allTutorials);
  const [user, setUser] = useAtom(userObject);
  const [showEdit, setShowEdit] = useState(false);

  //stats counter
  const numberLiked = list.filter(
    (listItem) => listItem.isLiked === true
  ).length;

  const numberLearning = list.filter(
    (listItem) => listItem.isLearning === true
  ).length;

  const numberMastered = list.filter(
    (listItem) => listItem.mastered === true
  ).length;

  //lvl calculation
  const numberMasteredBeginner = list
    .filter((listItem) => listItem.difficulty === "beginner")
    .filter((listItem) => listItem.mastered === true).length;

  const numberMasteredIntermediate = list
    .filter((listItem) => listItem.difficulty === "intermediate")
    .filter((listItem) => listItem.mastered === true).length;

  const numberMasteredAdvanced = list
    .filter((listItem) => listItem.difficulty === "advanced")
    .filter((listItem) => listItem.mastered === true).length;

  const numberMasteredMad = list
    .filter((listItem) => listItem.difficulty === "mad")
    .filter((listItem) => listItem.mastered === true).length;

  const lvl = Math.round(
    (numberMasteredBeginner * 50 +
      numberMasteredIntermediate * 100 +
      numberMasteredAdvanced * 150 +
      numberMasteredMad * 200) /
      100
  );

  //handle edit profil form
  function handleSubmit(event) {
    event.preventDefault();
    setUser({ name: event.target.name.value, bio: event.target.bio.value });

    setShowEdit(false);
  }

  return (
    <section>
      <h2>Profil</h2>
      <StyledImage
        src="https://i.ytimg.com/vi/bCIMMl3e7dY/hqdefault.jpg"
        alt="user image"
        width={100}
        height={100}
      />

      <p>Name: {user.name}</p>
      <p>Bio: {user.bio}</p>

      <p>
        LvL: <StyledNumber number={lvl}>{lvl}</StyledNumber>
      </p>

      <p>
        I have added{" "}
        <StyledNumber number={numberLiked}>{numberLiked}</StyledNumber> to my
        repertoire!
      </p>

      <p>
        I am learing{" "}
        <StyledNumber number={numberLearning}>{numberLearning}</StyledNumber>{" "}
        tricks right now!
      </p>

      <p>
        And I have mastered{" "}
        <StyledNumber number={numberMastered}>{numberMastered}</StyledNumber>{" "}
        tricks!
      </p>
      <button
        type="button"
        onClick={() => {
          setShowEdit(!showEdit);
        }}
      >
        {showEdit ? "close" : "edit"}
      </button>
      {showEdit && (
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" defaultValue={user.name} />
          <label htmlFor="bio">Bio:</label>
          <input type="text" id="bio" name="bio" defaultValue={user.bio} />
          <button type="submit">Edit</button>
        </form>
      )}
    </section>
  );
}

//styling for page
const StyledNumber = styled.span`
  ${({ number }) => {
    if (number === 0) {
      return css`
        color: red;
      `;
    } else {
      return css`
        color: green;
      `;
    }
  }}
`;

const StyledImage = styled(Image)`
  border-radius: 50%;
`;
