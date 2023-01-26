import CardList from "@/components/CardList";
import { allTutorials } from "@/mockData/globalStates";
import { useAtom } from "jotai";
import Link from "next/link";

export default function intermediate() {
  const [list] = useAtom(allTutorials);

  const intermediateList = list.filter(
    (category) => category.difficulty === "intermediate"
  );
  return (
    <section>
      <Link href="/tutorials">Back to Categories</Link>
      <h2>Intermediate Tutorials:</h2>
      <CardList tutorials={intermediateList} />
    </section>
  );
}
