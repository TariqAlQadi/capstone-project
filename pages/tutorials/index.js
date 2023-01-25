import CardList from "@/components/CardList";
import { allTutorials } from "@/mockData/globalStates";
import { useAtom } from "jotai";

export default function HomePage() {
  const [list] = useAtom(allTutorials);

  return (
    <section>
      <h2>All Tutorials:</h2>
      <CardList tutorials={list} />
    </section>
  );
}
