import { useState } from "react";
import { useRouter } from "next/router";
import styled from "styled-components";
import useSWR from "swr";
import { useSession } from "next-auth/react";
import Login from "@/components/Login";
import Button from "@/components/Button";
import Loading from "@/components/Loading";

// import dynamic CardList for randomizing
import dynamic from "next/dynamic";
import SVGIcon from "@/components/SVGIcon";
const CardList = dynamic(() => import("@/components/CardList"), {
  ssr: false,
});

export default function Feed() {
  const { data: session } = useSession();
  const router = useRouter();

  //filter states for artist/title & category
  const [filter, setFilter] = useState("");
  const [filterCategory, setFilterCategory] = useState("");

  //fetch mongoDB Atlas
  const { data } = useSWR("/api/tutorials");
  if (!data) {
    return <Loading />;
  }

  //data
  const list = data;

  //filtered by search
  const filteredBySearch = list.filter(
    (listItem) =>
      listItem.snippet.title.toLowerCase().includes(filter) ||
      listItem.snippet.videoOwnerChannelTitle.toLowerCase().includes(filter)
  );

  //filterd by category and search
  const filteredByOption = list.filter(
    (listItem) =>
      listItem.difficulty === filterCategory ||
      listItem.category === filterCategory
  );
  const filteredByCategorySearch = filteredByOption.filter(
    (listItem) =>
      listItem.snippet.title.toLowerCase().includes(filter) ||
      listItem.snippet.videoOwnerChannelTitle.toLowerCase().includes(filter)
  );

  //handle filter inputs
  function handleChangeSearch(event) {
    setFilter(event.target.value.toLowerCase());
  }
  function handleChangeCategory(event) {
    setFilterCategory(event.target.value.toLowerCase());
  }

  //random button function
  function handleRandom() {
    const randomTutorial = list[Math.floor(Math.random() * list.length)];
    router.push(`/details/${randomTutorial._id}`);
  }

  return (
    <>
      {session ? (
        <StyledSection>
          <StyledQuery>
            <StyledSearchWrapper>
              <SVGIcon
                variant="magnify"
                width="20px"
                color="var(--accent-color)"
              />
              <StyledTextInput
                aria-label="search"
                onChange={handleChangeSearch}
                type="text"
                name="search"
                id="search"
                maxLength={50}
              />
            </StyledSearchWrapper>
            <label htmlFor="select"></label>
            <StyledSelect
              onChange={handleChangeCategory}
              type="select"
              id="select"
              name="select"
            >
              <option value="">--choose a category--</option>
              <option value="beginner">Difficulty: Beginner</option>
              <option value="intermediate">Difficulty: Intermediate</option>
              <option value="advanced">Difficulty: Advanced</option>
              <option value="mad">Difficulty: Mad</option>
              <option value="cards">Cards</option>
              <option value="coin">Coins</option>
              <option value="gimmick">Gimmicks</option>
            </StyledSelect>
            <Button variant="random" aria-label="random" onClick={handleRandom}>
              <SVGIcon
                variant="dice"
                width="25px"
                color="var(--accent-color)"
              ></SVGIcon>
            </Button>
          </StyledQuery>
          {filterCategory === "" ? (
            <>
              <CardList tutorials={filteredBySearch} />
            </>
          ) : (
            <>
              <CardList tutorials={filteredByCategorySearch} />
            </>
          )}
          <p>nothing found</p>
        </StyledSection>
      ) : (
        <Login />
      )}
    </>
  );
}

//styling
const StyledSection = styled.section`
  margin: 10px;
  text-align: center;
`;

const StyledQuery = styled.div`
  margin-top: 70px;
  display: flex;
  gap: 5px;
  margin-bottom: 10px;
  justify-content: space-evenly;
`;

const StyledTextInput = styled.input`
  border: none;
  border-radius: 20px;
  outline: none;
  max-width: 7rem;
`;

const StyledSearchWrapper = styled.div`
  border: 1px solid var(--passive-color);
  border-radius: 20px;
  display: flex;
  padding-left: 8px;
`;

const StyledSelect = styled.select`
  border: 1px solid var(--passive-color);
  border-radius: 20px;
  padding-left: 5px;
  &:focus {
    outline: 1px solid var(--accent-color);
  }
`;
