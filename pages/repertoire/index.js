import { allTutorials } from "@/testData/globalStates";
import { useAtom } from "jotai";
import { StyledLink } from "@/components/StyledLink/Link.styled";
import SVGIcon from "@/components/SVGIcon";

export default function Repertoire() {
  const [list] = useAtom(allTutorials);

  const filteredList = list.filter((content) => content.isLiked === true);

  return (
    <section>
      <h2>Your Repertoire:</h2>
      <ul>
        {filteredList.map((tutorial) => {
          return (
            <li key={tutorial.id}>
              <StyledLink href={`/details/${tutorial.id}`}>
                <h3>{tutorial.snippet.title}</h3>
                {tutorial.isLearning && (
                  <SVGIcon
                    variant="learningOutline"
                    width="20px"
                    color="blue"
                  ></SVGIcon>
                )}
                {tutorial.mastered && (
                  <SVGIcon variant="done" width="20px" color="green"></SVGIcon>
                )}
              </StyledLink>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
