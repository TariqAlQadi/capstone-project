import CardList from "@/components/CardList";
import { allTutorials } from "@/mockData/globalStates";
import { useAtom } from "jotai";

export default function HomePage() {
  const [list] = useAtom(allTutorials);

  return (
    <>
      <CardList tutorials={list} />
    </>
  );
}
