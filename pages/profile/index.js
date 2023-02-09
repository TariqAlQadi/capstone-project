import Image from "next/image";
import styled from "styled-components";
import { useState, useEffect } from "react";
import ProfilSection from "@/components/ProfileSection";
import SVGIcon from "@/components/SVGIcon";
import useSWR from "swr";

export default function Profil() {
  //show edit profile state
  const [showEdit, setShowEdit] = useState(false);

  //logged-in state
  const [loggedInUser, setLoggedInUser] = useState({});

  //filter isLiked/isLearning/mastered section
  const [filter, setFilter] = useState("isLiked");

  //get logged-in user
  useEffect(() => {
    setLoggedInUser(JSON.parse(localStorage.getItem("loggedInUser")));
  }, []);

  //fetch tutorials & logged-in user
  const { data: list } = useSWR("/api/tutorials");
  const { data: user, mutate } = useSWR(`/api/users/${loggedInUser._id}`);
  if (!user) {
    return <div>...is Loading</div>;
  }
  if (!list) {
    return <div>...is Loading</div>;
  }

  //filter with filter state
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

  //handle submit profil
  async function handleEditProfile(event) {
    event.preventDefault();

    const newUserObject = {
      name: event.target.name.value,
      bio: event.target.bio.value,
      img: event.target.imageUrl.value,
    };

    try {
      const response = await fetch(`/api/users/${loggedInUser._id}`, {
        method: "PUT",
        body: JSON.stringify(newUserObject),
        headers: { "Content-type": "application/json" },
      });
      if (!response.ok) {
        console.error(`Error: ${response.status}`);
      }
    } catch (error) {
      console.error(error);
    }
    mutate();
    setShowEdit(false);
  }

  return (
    <>
      <StyledProfileSection>
        <h2>Profil</h2>
        <StyledImage src={user.img} alt="user image" width={100} height={100} />
        {!showEdit && (
          <>
            <p>Name: {user.name}</p>
            <StyledParagraph>Bio: {user.bio}</StyledParagraph>
          </>
        )}
        <StyledEditButton
          type="button"
          aria-label="edit profile"
          onClick={() => setShowEdit(!showEdit)}
        >
          {showEdit ? (
            <SVGIcon variant="close" width="20px" color="red" />
          ) : (
            <SVGIcon variant="edit" width="20px" color="green" />
          )}
        </StyledEditButton>
        {showEdit && (
          <StyledProfileForm onSubmit={handleEditProfile}>
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
            <label htmlFor="imageUrl">Image URL:</label>
            <input
              type="text"
              id="imageUrl"
              name="imageUrl"
              defaultValue={user.img}
              maxLength={100}
            />
            <button type="submit">Submit Changes</button>
          </StyledProfileForm>
        )}
      </StyledProfileSection>
      <StyledProfileSection>
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
          <li>
            <SVGIcon
              variant="medal"
              width="20px"
              color={lvl >= 1 ? "green" : "grey"}
            />

            {lvl >= 1 ? "Novice" : "(reach lvl 1)"}
          </li>
          <li>
            <SVGIcon
              variant="medal"
              width="20px"
              color={lvl >= 10 ? "skyblue" : "grey"}
            />

            {lvl >= 10 ? "Prodigy" : "(reach lvl 10)"}
          </li>
          <li>
            <SVGIcon
              variant="medal"
              width="20px"
              color={lvl >= 100 ? "blue" : "grey"}
            />

            {lvl >= 100 ? "Mastermind" : "(reach lvl 100)"}
          </li>
          <li>
            <SVGIcon
              variant="medal"
              width="20px"
              color={lvl >= 1000 ? "gold" : "grey"}
            />

            {lvl >= 1000 ? "Legend" : "(reach lvl 1000)"}
          </li>
          <li>
            <SVGIcon
              variant="medal"
              width="20px"
              color={numberMasteredBeginner >= 1 ? "yellow" : "grey"}
            />

            {numberMasteredBeginner >= 1
              ? "First Steps"
              : "(master 1st Beginner Turtorial)"}
          </li>
          <li>
            <SVGIcon
              variant="medal"
              width="20px"
              color={numberMasteredIntermediate >= 1 ? "orange" : "grey"}
            />

            {numberMasteredIntermediate >= 1
              ? "Intermediate Innovator"
              : "(master 1st Intermediate Turtorial)"}
          </li>
          <li>
            <SVGIcon
              variant="medal"
              width="20px"
              color={numberMasteredAdvanced >= 1 ? "red" : "grey"}
            />

            {numberMasteredAdvanced >= 1
              ? "Advanced Ace"
              : "(master 1st Advanced Turtorial)"}
          </li>
          <li>
            <SVGIcon
              variant="medal"
              width="20px"
              color={numberMasteredMad >= 1 ? "violet" : "grey"}
            />

            {numberMasteredMad >= 1
              ? "Mad Skillz"
              : "(master 1st Mad Turtorial)"}
          </li>
          <li>
            <SVGIcon
              variant="medal"
              width="20px"
              color={numberMastered >= 10 ? "silver" : "grey"}
            />

            {numberMastered >= 10 ? "Tenfold Triumph" : "(master 10 Tutorials)"}
          </li>
          <li>
            <SVGIcon
              variant="medal"
              width="20px"
              color={numberMastered >= 100 ? "black" : "grey"}
            />

            {numberMastered >= 100
              ? "Century of Success"
              : "(master 100 Tutorials)"}
          </li>
        </StyledList>
      </StyledProfileSection>
      <StyledProfileSectionBottom>
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
            color={filter === "isLiked" ? "red" : "grey"}
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
            color={filter === "isLearning" ? "blue" : "grey"}
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
            color={filter === "mastered" ? "green" : "grey"}
          />
        </button>
        <ProfilSection tutorials={filteredList} />
      </StyledProfileSectionBottom>
    </>
  );
}

//styling
const StyledParagraph = styled.p`
  word-wrap: break-word;
`;

const StyledNumber = styled.span`
  color: ${({ number }) => (number === 0 ? "red" : "green")};
`;

const StyledImage = styled(Image)`
  border-radius: 50%;
`;

const StyledList = styled.ul`
  list-style: none;
  padding: 0;
`;

const StyledProfileForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const StyledEditButton = styled.button`
  position: absolute;
  top: 5px;
  right: 5px;
`;

const StyledProfileSection = styled.section`
  margin: 10px;
  padding: 10px;
  position: relative;
  border: 1px solid black;
`;

const StyledProfileSectionBottom = styled.section`
  margin: 10px;
  padding: 10px;
  position: relative;
  border: 1px solid black;
  margin-bottom: 100px;
`;
