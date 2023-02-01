import Image from "next/image";
import { useAtom } from "jotai";
import { allTutorials, userObject } from "@/testData/globalStates";
import styled from "styled-components";
import { useState } from "react";
import ProfilSection from "@/components/ProfileSection";
import SVGIcon from "@/components/SVGIcon";

export default function Profil() {
  const [list] = useAtom(allTutorials);
  const [user, setUser] = useAtom(userObject);
  const [showEdit, setShowEdit] = useState(false);
  const [filter, setFilter] = useState("isLiked");

  //filter isLiked/isLearning/mastered
  const filteredIsLiked = list.filter((content) => content.isLiked);
  const filteredIsLearning = list.filter((content) => content.isLearning);
  const filteredMastered = list.filter((content) => content.mastered);

  //stats counter
  const numberLiked = list.filter((listItem) => listItem.isLiked).length;
  const numberLearning = list.filter((listItem) => listItem.isLearning).length;
  const numberMastered = list.filter((listItem) => listItem.mastered).length;

  //lvl calculation
  const numberMasteredBeginner = list
    .filter((listItem) => listItem.difficulty === "beginner")
    .filter((listItem) => listItem.mastered).length;

  const numberMasteredIntermediate = list
    .filter((listItem) => listItem.difficulty === "intermediate")
    .filter((listItem) => listItem.mastered).length;

  const numberMasteredAdvanced = list
    .filter((listItem) => listItem.difficulty === "advanced")
    .filter((listItem) => listItem.mastered).length;

  const numberMasteredMad = list
    .filter((listItem) => listItem.difficulty === "mad")
    .filter((listItem) => listItem.mastered).length;

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
    <>
      <section>
        <h2>Profil</h2>
        <StyledImage
          src="https://i.ytimg.com/vi/bCIMMl3e7dY/hqdefault.jpg"
          alt="user image"
          width={100}
          height={100}
        />
        <p>Name: {user.name}</p>
        <StyledParagraph>Bio: {user.bio}</StyledParagraph>
        <button type="button" onClick={() => setShowEdit(!showEdit)}>
          {showEdit ? "close" : "edit"}
        </button>
        {showEdit && (
          <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              defaultValue={user.name}
              maxLength={20}
            />
            <label htmlFor="bio">Bio:</label>
            <input
              type="text"
              id="bio"
              name="bio"
              defaultValue={user.bio}
              maxLength={100}
            />
            <button type="submit">Edit</button>
          </form>
        )}
      </section>
      <section>
        <h2>Stats</h2>
        <p>
          LvL: <StyledNumber number={lvl}>{lvl}</StyledNumber>
        </p>
        <p>
          I have added{" "}
          <StyledNumber number={numberLiked}>{numberLiked}</StyledNumber> tricks
          to my repertoire!
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
      </section>
      <section>
        <h2>Repertoire</h2>
        <button
          aria-label="liked"
          onClick={() => {
            setFilter("isLiked");
          }}
        >
          <SVGIcon
            variant={filter === "isLiked" ? "heart" : "heartOutline"}
            width="40px"
            color="red"
          />
        </button>
        <button
          aria-label="learning"
          onClick={() => {
            setFilter("isLearning");
          }}
        >
          <SVGIcon
            variant={filter === "isLearning" ? "learning" : "learningOutline"}
            width="40px"
            color="blue"
          />
        </button>
        <button
          aria-label="mastered"
          onClick={() => {
            setFilter("mastered");
          }}
        >
          <SVGIcon
            variant={filter === "mastered" ? "doneAll" : "done"}
            width="40px"
            color="green"
          />
        </button>
        {filter === "isLiked" && <ProfilSection tutorials={filteredIsLiked} />}
        {filter === "isLearning" && (
          <ProfilSection tutorials={filteredIsLearning} />
        )}
        {filter === "mastered" && (
          <ProfilSection tutorials={filteredMastered} />
        )}
      </section>
    </>
  );
}

//styling for page
const StyledParagraph = styled.p`
  word-wrap: break-word;
`;

const StyledNumber = styled.span`
  color: ${({ number }) => (number === 0 ? "red" : "green")};
`;

const StyledImage = styled(Image)`
  border-radius: 50%;
`;
