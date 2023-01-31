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
          <Link href="/tutorials" aria-label="tutorials">
            <SVGIcon
              variant={pathname === "/search" ? "search" : "searchOutline"}
              width="40px"
            />
          </Link>

          <Link href="/repertoire" aria-label="repertoire">
            <SVGIcon
              variant={pathname === "/repertoire" ? "heart" : "heartOutline"}
              width="40px"
            />
          </Link>

          <Link href="/shop" aria-label="shops">
            <SVGIcon
              variant={pathname === "/shop" ? "shop" : "shopOutline"}
              width="40px"
            />
          </Link>

          <Link href="/profil" aria-label="profil">
            <SVGIcon
              variant={pathname === "/profil" ? "user" : "userOutline"}
              width="40px"
            />
          </Link>
        </StyledNavigation>
      )}
    </>
  );
}
