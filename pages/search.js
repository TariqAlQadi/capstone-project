import CardList from "@/components/CardList";
import { allTutorials } from "@/testData/globalStates";
import { useAtom } from "jotai";
import { useState } from "react";

export default function Advanced() {
  const [list] = useAtom(allTutorials);
  const [filter, setFilter] = useState();

  const filterdlist = list.filter((listItem) =>
    listItem.snippet.title.includes(filter)
  );

  function handleChange(event) {
    setFilter(event.target.value);
  }

  return (
    <section>
      <label htmlFor="search">search</label>
      <input onChange={handleChange} type="text" name="search" id="search" />
      <CardList tutorials={filterdlist} />
    </section>
  );
}
