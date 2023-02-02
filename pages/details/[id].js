import CardDetails from "@/components/CardDetails";
import { useRouter } from "next/router";
import { useAtom } from "jotai";
import { allTutorials } from "@/testData/globalStates";
import { currentUser } from "@/testData/globalStates";

export default function DetailsPage() {
  const [list, setList] = useAtom(allTutorials);
  const [user, setUser] = useAtom(currentUser);

  const router = useRouter();
  const { id } = router.query;

  //pushes and pulls the user id on the isLiked array
  function handleToggleLike(id) {
    setList(
      list.map((tutorial) => {
        if (tutorial.id === id) {
          const updatedIsLiked = [];
          if (!tutorial.isLiked.includes(user.email)) {
            updatedIsLiked = [...tutorial.isLiked, user.email];
          } else {
            updatedIsLiked = tutorial.isLiked.filter(
              (email) => email !== user.email
            );
          }
          console.log(updatedIsLiked);
          return { ...tutorial, isLiked: updatedIsLiked };
        }
        return tutorial;
      })
    );
  }

  //find current tutorial
  const currentTutorial = list.find((tutorial) => {
    return tutorial.id === id;
  });

  //404 handling
  if (id !== currentTutorial?.id) {
    return <div>404 - Page not found</div>;
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
      <CardDetails
        content={currentTutorial}
        onToggle={handleToggleLike}
        id={id}
      />
    </section>
  );
}
