import CardList from "@/components/CardList";
import { allTutorials } from "@/testData/globalStates";
import { useAtom } from "jotai";
import { StyledLink } from "@/components/StyledLink/Link.styled";
import { useRouter } from "next/router";

export default function Categories() {
  const [list] = useAtom(allTutorials);

  const router = useRouter();
  const { category } = router.query;

  const filterdByCategory = list.filter(
    (listItem) => listItem.category === category
  );

  const filteredByDifficulty = list.filter(
    (listItem) => listItem.difficulty === category
  );

  const filteredLists = [...filterdByCategory, ...filteredByDifficulty];
  console.log(filteredLists);

  if (filteredLists.length === 0) {
    return <div>404 - Page not found</div>;
  }

  return (
    <section>
      <StyledLink href="/tutorials">Go Back</StyledLink>
      <h2>{category} Tutorials:</h2>
      <CardList tutorials={filteredLists} />
    </section>
  );
}
