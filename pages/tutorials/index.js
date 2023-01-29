import { StyledLink } from "@/components/StyledLink/Link.styled";
export default function Categories() {
  return (
    <section>
      <h2>Categories:</h2>
      <ul>
        <li>
          <StyledLink href="/tutorials/beginner">Beginner</StyledLink>
        </li>
        <li>
          <StyledLink href="/tutorials/intermediate">Intermediate</StyledLink>
        </li>
        <li>
          <StyledLink href="/tutorials/advanced">Advanced</StyledLink>
        </li>
        <li>
          <StyledLink href="/tutorials/mad">Mad</StyledLink>
        </li>
        <li>
          <StyledLink href="/tutorials/coin">Coin</StyledLink>
        </li>
        <li>
          <StyledLink href="/tutorials/gimmick">Gimmicks</StyledLink>
        </li>
      </ul>
    </section>
  );
}
