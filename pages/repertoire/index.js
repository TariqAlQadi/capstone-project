import CardList from "@/components/CardList";
import { beginnerList } from "@/mockData/globalBeginner52";
import { useAtom } from "jotai";
import Link from "next/link";

export default function Repertoire() {
  const [list] = useAtom(beginnerList);
  const filteredList = list.filter((content) => content.isLiked === true);

  return (
    <section>
      <h2>your Repertoire</h2>
      <ul>
        {filteredList.map((tutorial) => {
          return (
            <li key={tutorial.id}>
              <Link href={`/details/${tutorial.id}`}>
                <h3>{tutorial.snippet.title}</h3>
              </Link>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
