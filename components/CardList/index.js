import CardPreview from "../CardPreview";
import { StyledList, StyledListItem } from "./CardList.styled";
import {
  ClubsWrapper,
  HeartsWrapper,
  SpadesWrapper,
  DiamondsWrapper,
} from "../Login/Login.styled";
import SVGIcon from "../SVGIcon";

export default function CardList({ tutorials }) {
  const shuffledTutorials = tutorials.sort((a, b) => 0.5 - Math.random());

  return (
    <StyledList>
      {shuffledTutorials.map((tutorial) => {
        return (
          <StyledListItem key={tutorial._id}>
            <ClubsWrapper>
              <SVGIcon variant="clubs" width="20px" color="black" />
            </ClubsWrapper>
            <HeartsWrapper>
              <SVGIcon variant="heart" width="20px" color="darkred" />
            </HeartsWrapper>
            <SpadesWrapper>
              <SVGIcon variant="spades" width="20px" color="black" />
            </SpadesWrapper>
            <DiamondsWrapper>
              <SVGIcon variant="diamonds" width="20px" color="darkred" />
            </DiamondsWrapper>
            <CardPreview content={tutorial.snippet} _id={tutorial._id} />
          </StyledListItem>
        );
      })}
    </StyledList>
  );
}
