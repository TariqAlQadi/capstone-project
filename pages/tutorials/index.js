import { allTutorials } from "@/testData/globalStates";
import { useAtom } from "jotai";
import { useState } from "react";
import { useRouter } from "next/router";

// import dynamic CardList for randomizing
import dynamic from "next/dynamic";
const CardList = dynamic(() => import("@/components/CardList"), {
  ssr: false,
});

export default function Feed() {
  const [list] = useAtom(allTutorials);
  const router = useRouter();

  //filter state for artist and title
  const [filter, setFilter] = useState("");

  // filter functions
  const filterdByCategory = list.filter(
    (listItem) => listItem.category === filter
  );

  const filteredByDifficulty = list.filter(
    (listItem) => listItem.difficulty === filter
  );

  const filteredByTitle = list.filter((listItem) =>
    listItem.snippet.title.toLowerCase().includes(filter)
  );

  const filteredByArtist = list.filter((listItem) =>
    listItem.snippet.videoOwnerChannelTitle.toLowerCase().includes(filter)
  );

  // randomizing lists
  const shuffledTitleList = filteredByTitle.sort((a, b) => 0.5 - Math.random());

  const shuffledArtistList = filteredByArtist.sort(
    (a, b) => 0.5 - Math.random()
  );

  function handleChange(event) {
    setFilter(event.target.value.toLowerCase());
    console.log(event.target.value.toLowerCase());
  }

  //random button
  function handleRandom(event) {
    const randomTutorial = list[Math.floor(Math.random() * list.length)];
    router.push(`/details/${randomTutorial.id}`);
  }

  return (
    <section>
      <label htmlFor="search">search</label>
      <input
        onChange={handleChange}
        type="text"
        name="search"
        id="search"
        maxLength={50}
      />
      <label htmlFor="select"></label>
      <select onChange={handleChange} type="select" id="select" name="select">
        <option value="">--choose a category--</option>
        <option value="beginner">Difficulty: Beginner</option>
        <option value="intermediate">Difficulty: Intermediate</option>
        <option value="advanced">Difficulty: Advanced</option>
        <option value="mad">Difficulty: Mad</option>
        <option value="cards">Cards</option>
        <option value="coin">Coins</option>
        <option value="gimmick">Gimmicks</option>
      </select>
      <button type="button" onClick={handleRandom}>
        Random
      </button>
      <CardList tutorials={shuffledTitleList} />
      <CardList tutorials={shuffledArtistList} />
      <p>nothing found</p>
    </section>
  );
}
