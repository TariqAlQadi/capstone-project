import Link from "next/link";
import { StyledNavigation, StyledNavLink } from "./Navigation.styled";
import SVGIcon from "../SVGIcon";
import { useRouter } from "next/router";

export default function Navigation() {
  const { pathname } = useRouter();

  return (
    <>
      {pathname === "/" ? (
        <Link href="/tutorials"></Link>
      ) : (
        <StyledNavigation>
          <StyledNavLink href="/tutorials">
            <SVGIcon
              variant={pathname === "/tutorials" ? "list" : "listOutline"}
              width="40px"
            />
            Tutorials
          </StyledNavLink>
          <StyledNavLink href="/search">
            <SVGIcon
              variant={pathname === "/search" ? "search" : "searchOutline"}
              width="40px"
            />
            Search
          </StyledNavLink>
          <StyledNavLink href="/repertoire">
            <SVGIcon
              variant={pathname === "/repertoire" ? "heart" : "heartOutline"}
              width="40px"
            />
            Repertoire
          </StyledNavLink>
          <StyledNavLink href="/profil">
            <SVGIcon
              variant={pathname === "/profil" ? "user" : "userOutline"}
              width="40px"
            />
            Profil
          </StyledNavLink>
        </StyledNavigation>
      )}
    </>
  );
}
