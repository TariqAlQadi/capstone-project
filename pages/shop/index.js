import Link from "next/link";
import styled from "styled-components";
import { useSession } from "next-auth/react";

const onlineShops = [
  { name: "Murphsy Magic", href: "https://www.murphysmagic.com" },
  { name: "Ellusionist", href: "https://ellusionist.com" },
  { name: "Theory11", href: "https://www.theory11.com" },
  { name: "MagicShop", href: "https://www.magicshop.ch" },
  { name: "PinkyBreak", href: "https://pinkybreak.com" },
  { name: "Anyone", href: "https://anyoneworldwide.com" },
  { name: "Plainsight", href: "https://plainsightmagic.com" },
  { name: "Vanishing Inc.", href: "https://www.vanishingincmagic.com" },
  { name: "Penguin", href: "https://www.penguinmagic.com" },
  { name: "Stemaro", href: "https://stemaro-magic.de" },
  { name: "ProMystic", href: "https://promystic.com" },
  { name: "PK Magic", href: "https://www.pk-magic.com" },
  { name: "Alakazam", href: "https://alakazam.co.uk" },
];

export default function Shop() {
  return (
    <StyledSection>
      <h2>Online Shops:</h2>
      <StyledList>
        {onlineShops.map((shop) => {
          return (
            <li key={shop.href}>
              <Link href={shop.href}>{shop.name}</Link>
            </li>
          );
        })}
      </StyledList>
      <h2>Best Search Engine:</h2>
      <Link href="https://askalexander.org">Ask Alexander</Link>
      <h2>Forum:</h2>
      <Link href="https://www.themagiccafe.com/forums/index.php">
        The Magic Café
      </Link>
    </StyledSection>
  );
}

//styling
const StyledSection = styled.section`
  margin: 10px;
  margin-top: 70px;
  text-align: center;
  border: 1px solid black;
  padding: 10px;
`;

const StyledList = styled.ul`
  list-style: none;
  padding: 0;
`;
