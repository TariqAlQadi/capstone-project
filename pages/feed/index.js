import { allTutorials } from "@/testData/globalStates";
import { useAtom } from "jotai";
import { useState } from "react";
import { useRouter } from "next/router";

// import dynamic CardList for randomizing
import dynamic from "next/dynamic";
import SVGIcon from "@/components/SVGIcon";
const CardList = dynamic(() => import("@/components/CardList"), {
  ssr: false,
});

export default function Feed() {
  const [list] = useAtom(allTutorials);
  const router = useRouter();

  //filter states for artist and title
  const [filter, setFilter] = useState("");
  const [filterCategory, setFilterCategory] = useState("");

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
  function handleRandom(event) {
    const randomTutorial = list[Math.floor(Math.random() * list.length)];
    router.push(`/details/${randomTutorial.id}`);
  }

  return (
    <section>
      <label htmlFor="search">search</label>
      <input
        onChange={handleChangeSearch}
        type="text"
        name="search"
        id="search"
        maxLength={50}
      />
      <label htmlFor="select"></label>
      <select
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
      </select>
      <button type="button" aria-label="random" onClick={handleRandom}>
        <SVGIcon variant="dice" width="30px" color="black"></SVGIcon>
      </button>

      <h2> Results</h2>

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
    </section>
  );
}
