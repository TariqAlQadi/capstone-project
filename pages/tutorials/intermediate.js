import CardList from "@/components/CardList";
import { allTutorials } from "@/testData/globalStates";
import { useAtom } from "jotai";
import { StyledLink } from "@/components/StyledLink/Link.styled";

export default function Intermediate() {
  const [list] = useAtom(allTutorials);

  const intermediateList = list.filter(
    (category) => category.difficulty === "intermediate"
  );
  return (
    <section>
      <StyledLink href="/tutorials">Go Back</StyledLink>
      <h2>Intermediate Tutorials:</h2>
      <CardList tutorials={intermediateList} />
    </section>
  );
}
