import Link from "next/link";

export default function Categories() {
  return (
    <section>
      <h2>Categories:</h2>
      <ul>
        <li>
          <Link href="/tutorials/beginner">Beginner</Link>
        </li>
        <li>
          <Link href="/tutorials/intermediate">Intermediate</Link>
        </li>
        <li>
          <Link href="/tutorials/advanced">Advanced</Link>
        </li>
        <li>
          <Link href="/tutorials/coin">Coin</Link>
        </li>
      </ul>
    </section>
  );
}
