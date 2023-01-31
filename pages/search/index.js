// import CardList from "@/components/CardList";
import { allTutorials } from "@/testData/globalStates";
import { useAtom } from "jotai";
import { useState } from "react";
import { useRouter } from "next/router";

// import dynamic CardList for randomizing
import dynamic from "next/dynamic";
const CardList = dynamic(() => import("@/components/CardList"), {
  ssr: false,
});

export default function Search() {
  const [list] = useAtom(allTutorials);

  const router = useRouter();

  //for now it filters artist and title
  const [filter, setFilter] = useState("");

  const filteredByTitle = list.filter((listItem) =>
    listItem.snippet.title.toLowerCase().includes(filter)
  );

  const filteredByArtist = list.filter((listItem) =>
    listItem.snippet.videoOwnerChannelTitle.toLowerCase().includes(filter)
  );

  function handleChange(event) {
    setFilter(event.target.value.toLowerCase());
  }

  // randomizing lists
  const shuffledTitleList = filteredByTitle.sort((a, b) => 0.5 - Math.random());

  const shuffledArtistList = filteredByArtist.sort(
    (a, b) => 0.5 - Math.random()
  );

  //random button
  function handleRandom(event) {
    const randomTutorial = list[Math.floor(Math.random() * list.length)];
    router.push(`/details/${randomTutorial.id}`);
  }

  return (
    <section>
      <label htmlFor="search">search</label>
      <input onChange={handleChange} type="text" name="search" id="search" />
      <button type="button" onClick={handleRandom}>
        Random
      </button>
      <CardList tutorials={shuffledTitleList} />
      <CardList tutorials={shuffledArtistList} />
      <p>nothing found</p>
    </section>
  );
}
