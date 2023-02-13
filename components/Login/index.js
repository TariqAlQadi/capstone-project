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
} from "./Login.styled";
import SVGIcon from "../SVGIcon";
import Image from "next/image";
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
      <Image
        src="/../public/magician.gif"
        width={200}
        height={200}
        alt="magician waving a wand"
      />
      <p>
        This is a Web Application to discover, learn, create and spread the
        <br />
        <StyledHighlight>Art of Illusion!</StyledHighlight>
      </p>
      <Button
        variant="logIn"
        type="button"
        aria-label="log in"
        onClick={() => signIn()}
      >
        Login with Github
        <SVGIcon variant="github" width="20px" color="white" />
      </Button>
    </StyledSection>
  );
}
