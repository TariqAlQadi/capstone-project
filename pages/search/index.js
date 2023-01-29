import CardList from "@/components/CardList";
import { allTutorials } from "@/testData/globalStates";
import { useAtom } from "jotai";
import { useState } from "react";

export default function Search() {
  const [list] = useAtom(allTutorials);
  const [filter, setFilter] = useState("");

  const filteredlist = list.filter((listItem) =>
    listItem.snippet.title.toLowerCase().includes(filter)
  );

  function handleChange(event) {
    setFilter(event.target.value.toLowerCase());
  }

  return (
    <section>
      <label htmlFor="search">search</label>
      <input onChange={handleChange} type="text" name="search" id="search" />
      <CardList tutorials={filteredlist} />
    </section>
  );
}
