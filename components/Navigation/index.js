import Link from "next/link";
import { StyledNavigation } from "./Navigation.styled";
import SVGIcon from "../SVGIcon";
import { useRouter } from "next/router";

export default function Navigation() {
  const { pathname } = useRouter();

  return (
    <>
      {pathname === "/" ? (
        <></>
      ) : (
        <StyledNavigation>
          <Link href="/tutorials" aria-label="tutorials">
            <SVGIcon
              variant={pathname === "/tutorials" ? "search" : "searchOutline"}
              width="40px"
            />
          </Link>

          <Link href="/shop" aria-label="shops">
            <SVGIcon
              variant={pathname === "/shop" ? "shop" : "shopOutline"}
              width="40px"
            />
          </Link>

          <Link href="/profile" aria-label="profile">
            <SVGIcon
              variant={pathname === "/profile" ? "user" : "userOutline"}
              width="40px"
            />
          </Link>
        </StyledNavigation>
      )}
    </>
  );
}
