import CardList from "@/components/CardList";
import { beginnerList } from "@/mockData/globalBeginner52";
import { useAtom } from "jotai";

export default function Repertoire() {
  const [list] = useAtom(beginnerList);
  const filteredList = list.filter((content) => content.isLiked === true);

  return (
    <section>
      <h2>your Repertoire</h2>
      <CardList tutorials={filteredList} />
    </section>
  );
}
