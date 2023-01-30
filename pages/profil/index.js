import Image from "next/image";

export default function Profil() {
  return (
    <section>
      <h2>Profil</h2>
      <p>User Information:</p>
      <Image src="" alt="user image" width={100} height={100} />
      <span>LvL:</span>
      <span> I am learing XX tricks right now and have mastered XX </span>
      <form>
        <button type="submit">Edit</button>
      </form>
    </section>
  );
}
