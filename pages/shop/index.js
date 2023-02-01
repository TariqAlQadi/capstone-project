import Link from "next/link";

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
