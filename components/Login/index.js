import { signIn } from "next-auth/react";
import { StyledLoginButton, StyledSection } from "./Login.styled";

export default function Login() {
  return (
    <StyledSection>
      <h1>Welcome to Netrix</h1>
      <p>This is a Web Application to discover, learn and create Magic!</p>
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
