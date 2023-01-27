import CardList from "@/components/CardList";
import { allTutorials } from "@/mockData/globalStates";
import { useAtom } from "jotai";
import Link from "next/link";

export default function Advanced() {
  const [list] = useAtom(allTutorials);

  const advancedList = list.filter(
    (category) => category.difficulty === "advanced"
  );

  return (
    <section>
      <Link href="/tutorials">Back to Categories</Link>
      <h2>Advanced Tutorials:</h2>
      <CardList tutorials={advancedList} />
    </section>
  );
}
