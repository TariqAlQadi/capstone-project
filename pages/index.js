import CardList from "@/components/CardList";
import Header from "@/components/Header";
import useSWR from "swr";

const url =
  "https://www.googleapis.com/youtube/v3/playlistItems?playlistId=PLiiteex9CDbg-EAskekSQHbfj1j8WaaxM&key=AIzaSyBMSlB4mSGgur42EkHOKKMmTPtqOTSkRI4&part=snippet&maxResults=112";

export default function HomePage() {
  const { data, error, isLoading } = useSWR(url);

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;

  return (
    <>
      <Header />
      <CardList tutorials={data.items} />
    </>
  );
}
