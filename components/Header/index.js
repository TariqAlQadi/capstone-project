import { StyledHeader } from "./Header.styled";
import { useRouter } from "next/router";
import SVGIcon from "../SVGIcon";
import { StyledLogOutButton } from "./Header.styled";
import { signOut } from "next-auth/react";

export default function Header() {
  const { pathname } = useRouter();

  return (
    <>
      {pathname !== "/" && (
        <StyledHeader>
          <h1>NeTrix</h1>
          <StyledLogOutButton
            onClick={() => {
              signOut();
            }}
            aria-label="log-out"
          >
            <SVGIcon variant="logOut" width="20px" color="black" />
          </StyledLogOutButton>
        </StyledHeader>
      )}
    </>
  );
}
