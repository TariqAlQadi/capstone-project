import { useSession, signIn } from "next-auth/react";
import useSWR from "swr";
import { useRouter } from "next/router";
import SVGIcon from "@/components/SVGIcon";
import Image from "next/image";
import { StyledGreeting, StyledTitle } from "@/components/Login/Login.styled";
import Button from "@/components/Button";
import {
  DiamondsWrapper,
  ClubsWrapper,
  HeartsWrapper,
  SpadesWrapper,
  StyledSection,
  StyledHighlight,
} from "@/components/Login/Login.styled";

export default function Login() {
  const router = useRouter();
  const { data: session } = useSession();

  if (session) {
    router.push("/feed");
  }

  const {
    data: loggedInUser,
    isLoading: userIsLoading,
    error: userError,
  } = useSWR(session ? "/api/users" : null);

  if (userIsLoading) return <p>User is Loading</p>;
  if (userError) return <p>error user</p>;

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
        src="/magician.gif"
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
        aria-label="log in with github"
        onClick={() => signIn()}
      >
        <SVGIcon variant="github" width="20px" color="white" /> Login with
        GitHub
      </Button>
    </StyledSection>
  );
}
