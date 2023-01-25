import CardPreview from "../CardPreview";

export default function CardList({ tutorials }) {
  return (
    <ol>
      {tutorials.map((tutorial) => {
        return (
          <li key={tutorial.id}>
            <CardPreview content={tutorial.snippet} id={tutorial.id} />
          </li>
        );
      })}
    </ol>
  );
}
