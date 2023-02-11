import styled from "styled-components";
import { useSession, signIn } from "next-auth/react";
import useSWR from "swr";
import { useRouter } from "next/router";

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
      <h1>Welcome to Netrix</h1>
      <p>This is a Web Application to discover, learn and create Magic!</p>
      <button
        type="button"
        onClick={() => {
          signIn();
        }}
      >
        Login
      </button>
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
