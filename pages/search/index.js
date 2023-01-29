import CardList from "@/components/CardList";
import { allTutorials } from "@/testData/globalStates";
import { useAtom } from "jotai";
import { useState } from "react";

export default function Search() {
  const [list] = useAtom(allTutorials);

  //for now it filters artist and title
  const [filter, setFilter] = useState("");

  const filteredByTitle = list.filter((listItem) =>
    listItem.snippet.title.toLowerCase().includes(filter)
  );

  const filteredByArtist = list.filter((listItem) =>
    listItem.snippet.videoOwnerChannelTitle.toLowerCase().includes(filter)
  );

  // const filteredByCategory = list.filter((listItem) =>
  //   listItem.category.toLowerCase().includes(filter)
  // );

  // const filteredByDifficulty = list.filter((listItem) =>
  //   listItem.difficulty.toLowerCase().includes(filter)
  // );

  function handleChange(event) {
    setFilter(event.target.value.toLowerCase());
  }

  return (
    <section>
      <label htmlFor="search">search</label>
      <input onChange={handleChange} type="text" name="search" id="search" />
      <h3>filtered by Title:</h3>
      <CardList tutorials={filteredByTitle} />
      <h3>filtered by Artist:</h3>
      <CardList tutorials={filteredByArtist} />
      {/* <h3>filtered by Category:</h3>
      <CardList tutorials={filteredByCategory} />
      <h3>filtered by Difficulty:</h3>
      <CardList tutorials={filteredByDifficulty} /> */}
    </section>
  );
}
