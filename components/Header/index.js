import { StyledHeader, StyledHeading } from "./Header.styled";
import { useRouter } from "next/router";
import SVGIcon from "../SVGIcon";
import { signOut } from "next-auth/react";
import { useSession } from "next-auth/react";
import Button from "../Button";

export default function Header() {
  const { data: session } = useSession();
  const router = useRouter();

  return (
    <>
      {session && (
        <StyledHeader>
          <Button
            variant="back"
            type="button"
            aria-label="back to the last page"
            onClick={() => {
              router.back();
            }}
          >
            <SVGIcon
              variant="arrowLeft"
              width="30px"
              color="var(--accent-color)"
            />
          </Button>
          <StyledHeading>Netrix</StyledHeading>
          <Button
            variant="logOut"
            type="button"
            aria-label="logout"
            onClick={() => {
              signOut();
            }}
          >
            <SVGIcon
              variant="logOut"
              width="25px"
              color="var(--accent-color)"
            />
          </Button>
        </StyledHeader>
      )}
    </>
  );
}
