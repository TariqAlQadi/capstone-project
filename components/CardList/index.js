import CardPreview from "../CardPreview";

export default function CardList({ tutorials }) {
  return (
    <ul>
      {tutorials.map((tutorial) => {
        return (
          <li key={tutorial.id}>
            <CardPreview content={tutorial.snippet} id={tutorial.id} />
          </li>
        );
      })}
    </ul>
  );
}
