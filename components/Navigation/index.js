import Link from "next/link";
import { StyledNavigation } from "./Navigation.styled";
import SVGIcon from "../SVGIcon";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";

export default function Navigation() {
  const { data: session } = useSession();
  const { pathname } = useRouter();

  return (
    <>
      {session && (
        <StyledNavigation>
          <Link href="/feed" aria-label="feed">
            <SVGIcon
              variant={pathname === "/feed" ? "search" : "searchOutline"}
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
