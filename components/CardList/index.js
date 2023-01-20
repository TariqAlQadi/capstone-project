import Card from "../Card";
import useSWR from "swr";

export default function CardList() {
  const { data, error, isLoading } = useSWR(
    "https://www.googleapis.com/youtube/v3/playlistItems?playlistId=PLiiteex9CDbg-EAskekSQHbfj1j8WaaxM&key=AIzaSyBMSlB4mSGgur42EkHOKKMmTPtqOTSkRI4&part=snippet&maxResults=112"
  );

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;

  return (
    <ul>
      {data.items.map((tutorial) => {
        return (
          <li key={tutorial.id}>
            <Card content={tutorial.snippet} />
          </li>
        );
      })}
    </ul>
  );
}
