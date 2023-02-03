import Image from "next/image";
import { useAtom } from "jotai";
import { allTutorials, currentUser } from "@/testData/globalStates";
import styled from "styled-components";
import { useState } from "react";
import ProfilSection from "@/components/ProfileSection";
import SVGIcon from "@/components/SVGIcon";

export default function Profil() {
  const [list] = useAtom(allTutorials);
  const [user, setUser] = useAtom(currentUser);
  const [showEdit, setShowEdit] = useState(false);

  //filter isLiked/isLearning/mastered section
  const [filter, setFilter] = useState("isLiked");

  const filteredList = list.filter((listItem) =>
    listItem[filter].includes(user.email)
  );

  //stats counter
  const numberLiked = list.filter((listItem) =>
    listItem.isLiked.includes(user.email)
  ).length;
  const numberLearning = list.filter((listItem) =>
    listItem.isLearning.includes(user.email)
  ).length;
  const numberMastered = list.filter((listItem) =>
    listItem.mastered.includes(user.email)
  ).length;

  //lvl calculation
  const numberMasteredBeginner = list.filter(
    (listItem) =>
      listItem.mastered.includes(user.email) &&
      listItem.difficulty === "beginner"
  ).length;

  const numberMasteredIntermediate = list.filter(
    (listItem) =>
      listItem.mastered.includes(user.email) &&
      listItem.difficulty === "intermediate"
  ).length;

  const numberMasteredAdvanced = list.filter(
    (listItem) =>
      listItem.mastered.includes(user.email) &&
      listItem.difficulty === "advanced"
  ).length;

  const numberMasteredMad = list.filter(
    (listItem) =>
      listItem.mastered.includes(user.email) && listItem.difficulty === "mad"
  ).length;

  const lvl = Math.round(
    (numberMasteredBeginner * 50 +
      numberMasteredIntermediate * 100 +
      numberMasteredAdvanced * 150 +
      numberMasteredMad * 200) /
      50
  );

  //handle edit profil form
  function handleSubmit(event) {
    event.preventDefault();
    setUser({ name: event.target.name.value, bio: event.target.bio.value });
    setShowEdit(false);
  }

  return (
    <>
      <StyledSection>
        <h2>Profil</h2>
        <StyledImage src={user.img} alt="user image" width={100} height={100} />
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
      </StyledSection>
      <StyledSection>
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
        <h3>Achievements:</h3>
        <StyledList>
          {lvl >= 1 && (
            <li>
              <SVGIcon variant="medal" width="20px" color="green" />
              Novice
            </li>
          )}
          {lvl >= 10 && (
            <li>
              <SVGIcon variant="medal" width="20px" color="skyblue" />
              Prodigy
            </li>
          )}
          {lvl >= 100 && (
            <li>
              <SVGIcon variant="medal" width="20px" color="blue" />
              Mastermind
            </li>
          )}
          {lvl >= 1000 && (
            <li>
              <SVGIcon variant="medal" width="20px" color="gold" />
              Legend
            </li>
          )}
          {numberMasteredBeginner >= 1 && (
            <li>
              <SVGIcon variant="medal" width="20px" color="yellow" />
              First Steps
            </li>
          )}
          {numberMasteredIntermediate >= 1 && (
            <li>
              <SVGIcon variant="medal" width="20px" color="orange" />
              Intermediate Innovator
            </li>
          )}
          {numberMasteredAdvanced >= 1 && (
            <li>
              <SVGIcon variant="medal" width="20px" color="red" />
              Advanced Ace
            </li>
          )}
          {numberMasteredMad >= 1 && (
            <li>
              <SVGIcon variant="medal" width="20px" color="violet" />
              Mad Skillz
            </li>
          )}
          {numberMastered >= 10 && (
            <li>
              <SVGIcon variant="medal" width="20px" color="silver" />
              Tenfold Triumph
            </li>
          )}
          {numberMastered >= 100 && (
            <li>
              <SVGIcon variant="medal" width="20px" color="black" />
              Century of Success
            </li>
          )}
        </StyledList>
      </StyledSection>
      <StyledSection>
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
        <ProfilSection tutorials={filteredList} />
      </StyledSection>
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

const StyledSection = styled.section`
  margin: 10px;
`;

const StyledList = styled.ul`
  list-style: none;
  padding: 0;
`;
