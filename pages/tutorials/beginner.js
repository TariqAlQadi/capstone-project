import CardList from "@/components/CardList";
import { allTutorials } from "@/testData/globalStates";
import { useAtom } from "jotai";
import { StyledLink } from "@/components/StyledLink/Link.styled";

export default function Beginner() {
  const [list] = useAtom(allTutorials);
  const beginnerList = list.filter(
    (category) => category.difficulty === "beginner"
  );
  return (
    <section>
      <StyledLink href="/tutorials">Go Back</StyledLink>
      <h2>Beginner Tutorials:</h2>
      <CardList tutorials={beginnerList} />
    </section>
  );
}
