import { StyledHeader } from "./Header.styled";
import { useRouter } from "next/router";
import SVGIcon from "../SVGIcon";
import { StyledLogOutButton } from "./Header.styled";

export default function Header() {
  const { pathname } = useRouter();
  const router = useRouter();

  function handleLogOut() {
    localStorage.clear();
    router.push("/");
  }
  return (
    <>
      {pathname !== "/" && (
        <StyledHeader>
          <h1>NeTrix</h1>
          <StyledLogOutButton onClick={handleLogOut} aria-label="log-out">
            <SVGIcon variant="logOut" width="20px" color="black" />
          </StyledLogOutButton>
        </StyledHeader>
      )}
    </>
  );
}
