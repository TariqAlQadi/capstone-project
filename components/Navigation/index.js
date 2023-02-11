import Link from "next/link";
import { StyledNavigation } from "./Navigation.styled";
import SVGIcon from "../SVGIcon";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";
import Button from "../Button";
import { useState, useEffect } from "react";

export default function Navigation() {
  const router = useRouter();
  const { data: session } = useSession();
  const { pathname } = useRouter();
  const [isActive, setIsActive] = useState("");

  useEffect(() => {
    if (pathname === "/feed") {
      setIsActive("feed");
    }

    if (pathname === "/shop") {
      setIsActive("shop");
    }

    if (pathname === "/profile") {
      setIsActive("user");
    }
  }, [router]);

  return (
    <>
      {session && (
        <StyledNavigation>
          <Button
            variant="navButton"
            isActive={isActive === "feed"}
            href="/feed"
          >
            {isActive === "feed" ? (
              <SVGIcon variant="search" width="30" color="#23222" />
            ) : (
              <SVGIcon variant="searchOutline" width="30" color="#23222" />
            )}
          </Button>

          <Button
            variant="navButton"
            isActive={isActive === "shop"}
            href="/shop"
          >
            {isActive === "shop" ? (
              <SVGIcon variant="shop" width="30" color="#23222" />
            ) : (
              <SVGIcon variant="shopOutline" width="30" color="#23222" />
            )}
          </Button>

          <Button
            variant="navButton"
            isActive={isActive === "user"}
            href="/profile"
          >
            {isActive === "profile" ? (
              <SVGIcon variant="userOutline" width="30" color="#23222" />
            ) : (
              <SVGIcon variant="user" width="30" color="#23222" />
            )}
          </Button>
        </StyledNavigation>
      )}
    </>
  );
}
