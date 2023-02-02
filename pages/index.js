import Link from "next/link";

export default function Homepage() {
  return (
    <section>
      <h1>Welcome to Netrix</h1>
      <p>This is a Web Application to learn and create Magic!</p>
      <Link href="/feed">Click Here</Link> to enter!
    </section>
  );
}
