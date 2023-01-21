import CardDetails from "@/components/CardDetails";
import { useRouter } from "next/router";
import Link from "next/link";
import useSWR from "swr";

const url =
  "https://www.googleapis.com/youtube/v3/playlistItems?playlistId=PLiiteex9CDbg-EAskekSQHbfj1j8WaaxM&key=AIzaSyBMSlB4mSGgur42EkHOKKMmTPtqOTSkRI4&part=snippet&maxResults=112";

export default function DetailsPage() {
  const router = useRouter();
  const { id } = router.query;

  const { data, error, isLoading } = useSWR(url);

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;

  const currentTutorial = data.items.find((tutorial) => {
    return tutorial.id === id;
  });

  return (
    <>
      <Link href="/tutorials">Back</Link>
      <h1>Details:</h1>
      <CardDetails content={currentTutorial.snippet} />
    </>
  );
}
