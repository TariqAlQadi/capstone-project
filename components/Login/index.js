import { signIn } from "next-auth/react";
import {
  StyledSection,
  ClubsWrapper,
  HeartsWrapper,
  SpadesWrapper,
  DiamondsWrapper,
  StyledTitle,
  StyledGreeting,
  StyledHighlight,
  StyledIntroText,
  StyledImage,
} from "./Login.styled";
import SVGIcon from "../SVGIcon";

import Button from "../Button";

export default function Login() {
  return (
    <StyledSection>
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
      <StyledGreeting>Welcome to</StyledGreeting>
      <StyledTitle>Netrix</StyledTitle>
      <StyledImage
        src="/magician.gif"
        width={200}
        height={200}
        alt="magician waving a wand"
      />
      <StyledIntroText>
        This is a Web Application to discover, learn, create and spread the
        <br />
        <StyledHighlight>Art of Illusion!</StyledHighlight>
      </StyledIntroText>
      <Button
        variant="logIn"
        type="button"
        aria-label="log in with github"
        onClick={() => signIn()}
      >
        <SVGIcon variant="github" width="20px" color="white" /> Login with
        GitHub
      </Button>
    </StyledSection>
  );
}
