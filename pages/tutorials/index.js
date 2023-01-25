import CardList from "@/components/CardList";
import { beginnerList } from "@/mockData/globalBeginner52";
import { useAtom } from "jotai";

export default function HomePage() {
  const [list] = useAtom(beginnerList);

  return (
    <section>
      <h2>All Tutorials:</h2>
      <CardList tutorials={list} />
    </section>
  );
}
