import Card from "../Card";

export default function CardList({ tutorials }) {
  return (
    <ul>
      {tutorials.map((tutorial) => {
        return (
          <li key={tutorial.id}>
            <Card content={tutorial.snippet} />
          </li>
        );
      })}
    </ul>
  );
}
