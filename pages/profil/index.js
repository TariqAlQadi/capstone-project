import Image from "next/image";
import { useAtom } from "jotai";
import { allTutorials, userObject } from "@/testData/globalStates";
import styled from "styled-components";
import { useState } from "react";
import { StyledLink } from "@/components/StyledLink/Link.styled";
import SVGIcon from "@/components/SVGIcon";

export default function Profil() {
  const [list] = useAtom(allTutorials);
  const [user, setUser] = useAtom(userObject);
  const [showEdit, setShowEdit] = useState(false);

  //filter IsLiked
  const filteredIsLiked = list.filter((content) => content.isLiked);

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
        <h3>Stats</h3>
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
        <h2>Your Repertoire:</h2>
        <ul>
          {filteredIsLiked.map((tutorial) => {
            return (
              <li key={tutorial.id}>
                <StyledLink href={`/details/${tutorial.id}`}>
                  <h3>{tutorial.snippet.title}</h3>
                  {tutorial.isLiked && (
                    <SVGIcon variant="heart" width="20px" color="red"></SVGIcon>
                  )}
                  {tutorial.isLearning && (
                    <SVGIcon
                      variant="learningOutline"
                      width="20px"
                      color="blue"
                    ></SVGIcon>
                  )}
                  {tutorial.mastered && (
                    <SVGIcon
                      variant="done"
                      width="20px"
                      color="green"
                    ></SVGIcon>
                  )}
                </StyledLink>
              </li>
            );
          })}
        </ul>
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
