import CardList from "@/components/CardList";
import { beginnerList } from "@/mockData/globalBeginner52";
import { useAtom } from "jotai";

export default function HomePage() {
  const [list] = useAtom(beginnerList);

  return (
    <>
      <CardList tutorials={list} />
    </>
  );
}
