import Image from "next/image";
import styled, { keyframes } from "styled-components";
import { useState } from "react";
import ProfilSection from "@/components/ProfileSection";
import SVGIcon from "@/components/SVGIcon";
import useSWR from "swr";
import { useSession } from "next-auth/react";
import Login from "@/components/Login";
import Button from "@/components/Button";
import css from "styled-jsx/css";
import Loading from "@/components/Loading";

export default function Profil() {
  const { data: session } = useSession();

  //show edit profile state
  const [showEdit, setShowEdit] = useState(false);

  //filter isLiked/isLearning/mastered section & tabstate
  const [filter, setFilter] = useState("isLiked");

  //fetch tutorials & logged-in user
  const { data: list, isLoading: isLoadingList } = useSWR(
    session ? "/api/tutorials" : null
  );
  const {
    data: user,
    isLoading: isLoadingUser,
    mutate,
  } = useSWR(session ? `/api/users` : null);

  if (isLoadingUser) {
    return <Loading />;
  }

  if (isLoadingList) {
    return <Loading />;
  }

  if (!session) {
    return <Login />;
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
      const response = await fetch(`/api/users/${user._id}`, {
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
      <StyledProfileSectionTop>
        <StyledImage src={user.img} alt="user image" width={100} height={100} />
        {!showEdit && (
          <StyledUserInfo>
            <StyledHighlight>Name</StyledHighlight>
            <StyledParagraph>{user.name}</StyledParagraph>
            <StyledHighlight>Bio</StyledHighlight>
            <StyledParagraph> {user.bio}</StyledParagraph>
          </StyledUserInfo>
        )}
        <Button
          variant="edit"
          type="button"
          aria-label={showEdit ? "close editing" : "edit profile"}
          onClick={() => setShowEdit(!showEdit)}
        >
          {showEdit ? (
            <SVGIcon variant="close" width="20px" color="var(--accent-color)" />
          ) : (
            <SVGIcon variant="edit" width="20px" color="var(--accent-color)" />
          )}
        </Button>
        {showEdit && (
          <StyledProfileForm onSubmit={handleEditProfile}>
            <StyledLabel htmlFor="name">Name:</StyledLabel>
            <StyledTextInput
              type="text"
              id="name"
              name="name"
              defaultValue={user.name}
              maxLength={20}
            />
            <StyledLabel htmlFor="bio">Bio:</StyledLabel>
            <StyledTextInput
              type="text"
              id="bio"
              name="bio"
              defaultValue={user.bio}
              maxLength={60}
            />
            <StyledLabel htmlFor="imageUrl">Image URL:</StyledLabel>
            <StyledTextInput
              type="text"
              id="imageUrl"
              name="imageUrl"
              defaultValue={user.img}
              maxLength={100}
            />
            <button type="submit">Submit Changes</button>
          </StyledProfileForm>
        )}
      </StyledProfileSectionTop>
      <StyledProfileSection>
        <StyledHighlight>Stats</StyledHighlight>
        <p>
          Level: <StyledNumber number={lvl}>{lvl}</StyledNumber>
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
          And I have already mastered{" "}
          <StyledNumber number={numberMastered}>{numberMastered}</StyledNumber>{" "}
          tricks!
        </p>
        <StyledHighlight>Achievements</StyledHighlight>
        <StyledList>
          <StyledListItem>
            <SVGIcon
              variant="medal"
              width="15px"
              color={lvl >= 1 ? "var(--accent-color)" : "var(--passive-color)"}
            />

            {lvl >= 1 ? "Novice" : "(reach lvl 1)"}
          </StyledListItem>
          <StyledListItem>
            <SVGIcon
              variant="medal"
              width="15px"
              color={lvl >= 10 ? "var(--accent-color)" : "var(--passive-color)"}
            />

            {lvl >= 10 ? "Prodigy" : "(reach lvl 10)"}
          </StyledListItem>
          <StyledListItem>
            <SVGIcon
              variant="medal"
              width="15px"
              color={
                lvl >= 100 ? "var(--accent-color)" : "var(--passive-color)"
              }
            />

            {lvl >= 100 ? "Mastermind" : "(reach lvl 100)"}
          </StyledListItem>
          <StyledListItem>
            <SVGIcon
              variant="medal"
              width="15px"
              color={
                lvl >= 1000 ? "var(--accent-color)" : "var(--passive-color)"
              }
            />

            {lvl >= 1000 ? "Legend" : "(reach lvl 1000)"}
          </StyledListItem>
          <StyledListItem>
            <SVGIcon
              variant="medal"
              width="15px"
              color={
                numberMasteredBeginner >= 1
                  ? "var(--accent-color)"
                  : "var(--passive-color)"
              }
            />

            {numberMasteredBeginner >= 1
              ? "First Steps"
              : "(master 1st Beginner Turtorial)"}
          </StyledListItem>
          <StyledListItem>
            <SVGIcon
              variant="medal"
              width="15px"
              color={
                numberMasteredIntermediate >= 1
                  ? "var(--accent-color)"
                  : "var(--passive-color)"
              }
            />

            {numberMasteredIntermediate >= 1
              ? "Innovator"
              : "(master 1st Intermediate Turtorial)"}
          </StyledListItem>
          <StyledListItem>
            <SVGIcon
              variant="medal"
              width="15px"
              color={
                numberMasteredAdvanced >= 1
                  ? "var(--accent-color)"
                  : "var(--passive-color)"
              }
            />

            {numberMasteredAdvanced >= 1
              ? "Advanced Ace"
              : "(master 1st Advanced Turtorial)"}
          </StyledListItem>
          <StyledListItem>
            <SVGIcon
              variant="medal"
              width="15px"
              color={
                numberMasteredMad >= 1
                  ? "var(--accent-color)"
                  : "var(--passive-color)"
              }
            />

            {numberMasteredMad >= 1
              ? "Mad Skillz"
              : "(master 1st Mad Turtorial)"}
          </StyledListItem>
          <StyledListItem>
            <SVGIcon
              variant="medal"
              width="15px"
              color={
                numberMastered >= 10
                  ? "var(--accent-color)"
                  : "var(--passive-color)"
              }
            />

            {numberMastered >= 10 ? "Tenfold Triumph" : "(master 10 Tutorials)"}
          </StyledListItem>
          <StyledListItem>
            <SVGIcon
              variant="medal"
              width="15px"
              color={
                numberMastered >= 100
                  ? "var(--accent-color)"
                  : "var(--passive-color)"
              }
            />

            {numberMastered >= 100
              ? "Century of Success"
              : "(master 100 Tutorials)"}
          </StyledListItem>
        </StyledList>
      </StyledProfileSection>
      <StyledProfileSectionBottom>
        <StyledTabBar filter={filter}>
          <Button
            type="button"
            variant="tabButton"
            aria-label={filter === "isLiked" ? "" : "open liked tab"}
            onClick={() => {
              setFilter("isLiked");
            }}
          >
            <SVGIcon
              variant={filter === "isLiked" ? "heart" : "heartOutline"}
              width="20px"
              color={
                filter === "isLiked"
                  ? "var(--accent-color)"
                  : "var(--passive-color)"
              }
            />
            {filter === "isLiked" ? (
              <StyledActiveText>Likes</StyledActiveText>
            ) : (
              <StyledPassiveText>Likes</StyledPassiveText>
            )}
          </Button>
          <Button
            type="button"
            variant="tabButton"
            aria-label={filter === "isLearning" ? "" : "open learning tab"}
            onClick={() => {
              setFilter("isLearning");
            }}
          >
            <SVGIcon
              variant={filter === "isLearning" ? "learning" : "learningOutline"}
              width="20px"
              color={filter === "isLearning" ? "black" : "var(--passive-color)"}
            />
            {filter === "isLearning" ? (
              <StyledActiveText>Learning</StyledActiveText>
            ) : (
              <StyledPassiveText>Learning</StyledPassiveText>
            )}
          </Button>
          <Button
            type="button"
            variant="tabButton"
            aria-label={filter === "mastered" ? "" : "open mastered tab"}
            onClick={() => {
              setFilter("mastered");
            }}
          >
            <SVGIcon
              variant={filter === "mastered" ? "doneAll" : "done"}
              width="20px"
              color={
                filter === "mastered" ? "var(--green)" : "var(--passive-color)"
              }
            />
            {filter === "mastered" ? (
              <StyledActiveText>Mastered</StyledActiveText>
            ) : (
              <StyledPassiveText>Mastered</StyledPassiveText>
            )}
          </Button>
          <div></div>
        </StyledTabBar>
        <ProfilSection tutorials={filteredList} />
      </StyledProfileSectionBottom>
    </>
  );
}

//styling
const appear = keyframes`
  to {
    opacity: 1;
  }
`;
const StyledParagraph = styled.p`
  word-break: break-word;
`;

const StyledLabel = styled.label`
  color: var(--accent-color);
  font-size: 0.8em;
`;

const StyledNumber = styled.span`
  font-weight: ${({ number }) => (number === 0 ? "normal" : "bold")};
  color: ${({ number }) =>
    number === 0 ? "var(--passive-color)" : "var(--accent-color)"};
`;

const StyledImage = styled(Image)`
  border-radius: 50%;
  box-shadow: 1px 1px 3px black;
`;

const StyledList = styled.ul`
  list-style: none;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2px;
`;

const StyledListItem = styled.li`
  font-size: 0.9em;
  display: flex;
  gap: 3px;
`;

const StyledProfileForm = styled.form`
  margin-left: 10px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const StyledUserInfo = styled.div`
  margin: 0.3em 0.7em;
  display: flex;
  flex-direction: column;
  opacity: 0;
  animation: ${appear} 0.5s forwards;
`;

const StyledProfileSection = styled.section`
  margin: 0 0.5em;
  padding: 0.5em;
  position: relative;
  border: 1px solid var(--passive-color);
  border-radius: 5px;
  opacity: 0;
  animation: ${appear} 0.7s forwards;
`;

const StyledProfileSectionTop = styled.section`
  margin: 0.5em;
  margin-top: 70px;
  padding: 0.5em;
  position: relative;
  border: 1px solid var(--passive-color);
  border-radius: 5px;
  display: flex;
`;

const StyledProfileSectionBottom = styled.section`
  margin: 0.5em;
  padding: 0.5em;
  position: relative;
  border: 1px solid var(--passive-color);
  border-radius: 5px;
  margin-bottom: 76vh;
  opacity: 0;
  animation: ${appear} 0.9s forwards;
`;

const StyledTextInput = styled.input`
  padding: 0.3em;
  outline: none;
  border: 2px solid var(--passive-color);
  border-radius: 5px;

  &:focus {
    border: 2px solid var(--accent-color);
  }
`;

const StyledHighlight = styled.span`
  color: var(--accent-color);
  font-size: 0.8em;
`;

const StyledActiveText = styled.span`
  color: var(--active-color);
`;

const StyledPassiveText = styled.span`
  color: var(--passive-color);
`;

const StyledTabBar = styled.div`
  margin-bottom: 0.5em;
  width: 100%;
  height: 45px;
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  border: 1px solid var(--passive-color);
  justify-content: space-around;
  border-radius: 5px;

  div {
    transition: 0.5s ease;
    width: 33%;
    position: absolute;
    height: 100%;
    border: 2px solid darkred;
    border-radius: 5px;
    display: flex;

    ${({ filter }) => {
      if (filter === "isLiked") {
        return css`
          left: 0%;
        `;
      }
      if (filter === "isLearning") {
        return css`
          left: 33%;
        `;
      }
      if (filter === "mastered") {
        return css`
          left: 67%;
        `;
      }
    }}
  }
`;
