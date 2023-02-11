import styled from "styled-components";
import { useSession, signIn } from "next-auth/react";
import useSWR from "swr";
import { useRouter } from "next/router";
import SVGIcon from "@/components/SVGIcon";

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
      <h1>Welcome to Netrix</h1>
      <p>This is a Web Application to discover, learn and create Magic!</p>
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
const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
`;

const StyledSection = styled.section`
  padding: 10px;
  margin: 10px;
  text-align: center;
  border: 1px solid black;
`;

const StyledLoginButton = styled.button`
  margin: 20px;
`;
const ClubsWrapper = styled.div`
  rotate: -45deg;
  position: absolute;
  left: 15px;
  top: 15px;
`;
const HeartsWrapper = styled.div`
  rotate: 45deg;
  position: absolute;
  right: 15px;
  top: 15px;
`;

const SpadesWrapper = styled.div`
  rotate: 135deg;
  position: absolute;
  top: 120px;
  right: 15px;
`;

const DiamondsWrapper = styled.div`
  rotate: 45deg;
  position: absolute;
  left: 15px;
  top: 120px;
`;
