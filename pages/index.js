import styled from "styled-components";
import { useSession, signIn } from "next-auth/react";
import useSWR from "swr";
import { useRouter } from "next/router";
import SVGIcon from "@/components/SVGIcon";
import Image from "next/image";
import { StyledTitle } from "@/components/Login/Login.styled";

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
      <h1>Welcome to</h1>
      <StyledTitle>Netrix</StyledTitle>
      <Image
        src="/../public/magician.gif"
        width={200}
        height={200}
        alt="magician waving a wand"
      />
      <p>
        This is a Web Application to discover, learn, create and spread the
        <br /> Art of Illusion!
      </p>
      <StyledLoginButton
        type="button"
        onClick={() => {
          signIn();
        }}
      >
        Login with Github
      </StyledLoginButton>
    </StyledSection>
  );
}

//styling
const StyledSection = styled.section`
  padding: 10px;
  margin: 10px;
  text-align: center;
  border: 1px solid lightgrey;
  border-radius: 5px;
  position: relative;
`;

const StyledLoginButton = styled.button`
  margin: 20px;
`;
const ClubsWrapper = styled.div`
  rotate: -45deg;
  position: absolute;
  left: 5px;
  top: 5px;
`;
const HeartsWrapper = styled.div`
  rotate: 45deg;
  position: absolute;
  right: 5px;
  top: 5px;
`;

const SpadesWrapper = styled.div`
  rotate: 135deg;
  position: absolute;
  bottom: 5px;
  right: 5px;
`;

const DiamondsWrapper = styled.div`
  rotate: 45deg;
  position: absolute;
  left: 5px;
  bottom: 5px;
`;
