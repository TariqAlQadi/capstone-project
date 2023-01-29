import Link from "next/link";
import { StyledNavigation } from "./Navigation.styled";
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
          <Link href="/tutorials">
            <SVGIcon
              variant={pathname === "/tutorials" ? "list" : "listOutline"}
              width="40px"
            />
          </Link>
          <Link href="/search">
            <SVGIcon
              variant={pathname === "/search" ? "search" : "searchOutline"}
              width="40px"
            />
          </Link>
          <Link href="/repertoire">
            <SVGIcon
              variant={pathname === "/repertoire" ? "heart" : "heartOutline"}
              width="40px"
            />
          </Link>
        </StyledNavigation>
      )}
    </>
  );
}
