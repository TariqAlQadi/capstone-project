import Link from "next/link";
import { StyledNavigation } from "./Navigation.styled";
import SVGIcon from "../SVGIcon";
import { useState } from "react";

export default function Navigation() {
  const [toggleNav, setToggleNav] = useState(false);

  return (
    <StyledNavigation>
      <Link
        href="/tutorials"
        onClick={() => {
          setToggleLikeNav(false);
        }}
      >
        <SVGIcon variant="home" width="40px" />
      </Link>
      <Link
        href="/repertoire"
        onClick={() => {
          setToggleNav(true);
        }}
      >
        <SVGIcon
          variant={toggleNav ? "bookmarked" : "notBookmarked"}
          width="40px"
        />
      </Link>
    </StyledNavigation>
  );
}
