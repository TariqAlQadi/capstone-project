import { StyledHeader } from "./Header.styled";
import { useRouter } from "next/router";

export default function Header() {
  const { pathname } = useRouter();
  return (
    <>
      {pathname !== "/" && (
        <StyledHeader>
          <h1>NeTrix</h1>
        </StyledHeader>
      )}
    </>
  );
}
