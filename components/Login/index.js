import { signIn } from "next-auth/react";
import {
  StyledLoginButton,
  StyledSection,
  ClubsWrapper,
  HeartsWrapper,
  SpadesWrapper,
  DiamondsWrapper,
  StyledTitle,
} from "./Login.styled";
import SVGIcon from "../SVGIcon";
import Image from "next/image";

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
      <h1>Welcome to </h1>
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
        Art of Illusion!
      </p>
      <StyledLoginButton
        type="button"
        aria-label="login"
        onClick={() => signIn()}
      >
        Login with Github
      </StyledLoginButton>
    </StyledSection>
  );
}
