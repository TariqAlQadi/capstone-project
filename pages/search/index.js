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

  function handleChange(event) {
    setFilter(event.target.value.toLowerCase());
  }

  return (
    <section>
      <label htmlFor="search">search</label>
      <input onChange={handleChange} type="text" name="search" id="search" />
      <CardList tutorials={filteredByTitle} />
      <CardList tutorials={filteredByArtist} />
    </section>
  );
}
