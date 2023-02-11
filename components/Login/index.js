import { signIn } from "next-auth/react";
import {
  StyledLoginButton,
  StyledSection,
  ClubsWrapper,
  HeartsWrapper,
  SpadesWrapper,
  DiamondsWrapper,
} from "./Login.styled";
import SVGIcon from "../SVGIcon";

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
      <h1>Welcome to Netrix</h1>
      <p>
        This is a Web Application to discover, learn, create and spread the Art
        of Magic!
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
