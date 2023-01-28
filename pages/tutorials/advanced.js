import CardList from "@/components/CardList";
import { allTutorials } from "@/testData/globalStates";
import { useAtom } from "jotai";
import { StyledLink } from "@/components/StyledLink/Link.styled";

export default function Advanced() {
  const [list] = useAtom(allTutorials);

  const advancedList = list.filter(
    (listItem) => listItem.difficulty === "advanced"
  );

  return (
    <section>
      <StyledLink href="/tutorials">Go Back</StyledLink>
      <h2>Advanced Tutorials:</h2>
      <CardList tutorials={advancedList} />
    </section>
  );
}
