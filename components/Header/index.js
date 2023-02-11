import { StyledHeader } from "./Header.styled";
import { useRouter } from "next/router";
import SVGIcon from "../SVGIcon";
import { StyledLogOutButton, StyledBackButton } from "./Header.styled";
import { signOut } from "next-auth/react";
import { useSession } from "next-auth/react";

export default function Header() {
  const { data: session } = useSession();
  const router = useRouter();

  return (
    <>
      {session && (
        <StyledHeader>
          <StyledBackButton
            type="button"
            aria-label="back to the last page"
            onClick={() => {
              router.back();
            }}
          >
            <SVGIcon variant="arrowLeft" width="20px" color="black" />
          </StyledBackButton>
          <h1>NeTrix</h1>
          <StyledLogOutButton
            type="button"
            aria-label="logout"
            onClick={() => {
              signOut();
            }}
          >
            <SVGIcon variant="logOut" width="20px" color="black" />
          </StyledLogOutButton>
        </StyledHeader>
      )}
    </>
  );
}
