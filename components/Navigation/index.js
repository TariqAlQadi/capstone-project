import Link from "next/link";
import { StyledNavigation } from "./Navigation.styled";
import SVGIcon from "../SVGIcon";

export default function Navigation() {
  return (
    <StyledNavigation>
      <Link href="/tutorials">
        <SVGIcon variant="home" width="40px" />
      </Link>
      <Link href="/repertoire">
        <SVGIcon variant="bookmarked" width="40px" />
      </Link>
    </StyledNavigation>
  );
}
