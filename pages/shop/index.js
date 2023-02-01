import Link from "next/link";

const onlineShops = [
  { name: "Murphys Magic", href: "https://www.murphysmagic.com" },
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
  { name: "PK Magic", href: "https://www.pk-magic.com/products" },
  { name: "Alakazam", href: "https://alakazam.co.uk" },
  { name: "Magic Effect", href: "https://www.geschaft-magic-effect.de" },
  { name: "Playing Card Decks", href: "https://playingcarddecks.com" },
  { name: "Rare Plaing Cards", href: "https://rareplayingcards.com" },
  { name: "House of Playing Cards", href: "https://houseofplayingcards.com" },
  { name: "Art of Play", href: "https://www.artofplay.com" },
];

export default function Shop() {
  return (
    <section>
      <h2>Online Shops:</h2>
      <ul>
        {onlineShops.map((shop) => {
          return (
            <li key={shop.href}>
              <Link href={shop.href}>{shop.name}</Link>
            </li>
          );
        })}
      </ul>
      <h2>Best Search Engine:</h2>
      <Link href="https://askalexander.org">Ask Alexander</Link>
      <h2>Forum:</h2>
      <Link href="https://www.themagiccafe.com/forums/index.php">
        The Magic Café
      </Link>
    </section>
  );
}
