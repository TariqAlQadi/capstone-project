import CardDetails from "@/components/CardDetails";
import { useRouter } from "next/router";
import { useAtom } from "jotai";
import { currentUser } from "@/testData/globalStates";
import useSWR from "swr";

export default function DetailsPage() {
  const [user] = useAtom(currentUser);

  const router = useRouter();
  const { _id } = router.query;

  const { data } = useSWR(`/api/tutorials/${_id}`);

  if (!data) {
    return <div>...is Loading</div>;
  }

  //pushes & pulls the user id on/off the isLiked array
  function handleToggleLike(_id) {
    // setList(
    //   list.map((tutorial) => {
    //     if (tutorial._id === _id) {
    //       let updatedIsLiked = [];
    //       if (!tutorial.isLiked.includes(user.email)) {
    //         updatedIsLiked = [...tutorial.isLiked, user.email];
    //       } else {
    //         updatedIsLiked = tutorial.isLiked.filter(
    //           (email) => email !== user.email
    //         );
    //       }
    //       return { ...tutorial, isLiked: updatedIsLiked };
    //     }
    //     return tutorial;
    //   })
    // );
  }

  return (
    <section>
      <button
        type="button"
        onClick={() => {
          router.back();
        }}
      >
        Go Back
      </button>
      <h2>Details:</h2>
      <CardDetails content={data} onToggle={handleToggleLike} _id={_id} />
    </section>
  );
}
