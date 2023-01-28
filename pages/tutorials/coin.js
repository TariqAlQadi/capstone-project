import CardList from "@/components/CardList";
import { allTutorials } from "@/testData/globalStates";
import { useAtom } from "jotai";
import { StyledLink } from "@/components/StyledLink/Link.styled";

export default function Coin() {
  const [list] = useAtom(allTutorials);
  const coinList = list.filter((listItem) => listItem.category === "coin");

  return (
    <section>
      <StyledLink href="/tutorials">Go Back</StyledLink>
      <h2>Coin Tutorials:</h2>
      <CardList tutorials={coinList} />
    </section>
  );
}
