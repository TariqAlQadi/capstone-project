import CardList from "@/components/CardList";
import { allTutorials } from "@/mockData/globalStates";
import { useAtom } from "jotai";
import Link from "next/link";

export default function coin() {
  const [list] = useAtom(allTutorials);
  const coinList = list.filter((category) => category.difficulty === "coin");

  return (
    <section>
      <Link href="/tutorials">Back to Categories</Link>
      <h2>Coin Tutorials:</h2>
      <CardList tutorials={coinList} />
    </section>
  );
}
