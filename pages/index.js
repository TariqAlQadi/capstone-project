import styled from "styled-components";
import { useSession, signIn, signOut } from "next-auth/react";

export default function Login() {
  const { data: session } = useSession();

  return (
    <StyledSection>
      <h1>Welcome to Netrix</h1>
      <p>This is a Web Application to discover, learn and create Magic!</p>

      <button
        type="button"
        onClick={() => {
          if (session) {
            signOut();
          } else {
            signIn();
          }
        }}
      >
        {session ? "Logout" : "Login"}
      </button>
      <br />
      <p>Psst! ... Try the test login!</p>
      <h3>Email: test@test</h3>
      <h3>Password: test</h3>
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
