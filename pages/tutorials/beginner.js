import CardList from "@/components/CardList";
import { allTutorials } from "@/mockData/globalStates";
import { useAtom } from "jotai";

import Link from "next/link";

export default function Beginner() {
  const [list] = useAtom(allTutorials);
  const beginnerList = list.filter(
    (category) => category.difficulty === "beginner"
  );
  return (
    <section>
      <Link href="/tutorials">Back to Categories</Link>
      <h2>Beginner Tutorials:</h2>
      <CardList tutorials={beginnerList} />
    </section>
  );
}
