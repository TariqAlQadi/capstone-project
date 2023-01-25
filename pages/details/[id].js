import CardDetails from "@/components/CardDetails";
import { beginnerList } from "@/mockData/globalBeginner52";
import { useRouter } from "next/router";
import { useAtom } from "jotai";

export default function DetailsPage() {
  const [list, setList] = useAtom(beginnerList);

  const router = useRouter();
  const { id } = router.query;

  function handleToggleLike(id) {
    setList(
      list.map((tutorial) => {
        if (tutorial.id === id) {
          return { ...tutorial, isLiked: !tutorial.isLiked };
        }
        return tutorial;
      })
    );
  }

  const currentTutorial = list.find((tutorial) => {
    return tutorial.id === id;
  });

  return (
    <section>
      <h2>Details:</h2>
      <CardDetails content={currentTutorial} onToggle={handleToggleLike} />
    </section>
  );
}
