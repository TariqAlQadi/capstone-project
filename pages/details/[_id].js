import CardDetails from "@/components/CardDetails";
import { useRouter } from "next/router";
import { useAtom } from "jotai";
import { currentUser } from "@/testData/globalStates";
import useSWR from "swr";

export default function DetailsPage() {
  const [user] = useAtom(currentUser);

  const router = useRouter();
  const { _id } = router.query;

  const { data, mutate } = useSWR(`/api/tutorials/${_id}`);

  if (!data) {
    return <div>...is Loading</div>;
  }

  //pushes & pulls the user id on/off the isLiked array
  async function handleToggleLike() {
    if (!data.isLiked.includes(user.email)) {
      try {
        const response = await fetch(`/api/tutorials/${_id}`, {
          method: "PUT",
          body: JSON.stringify(user.email),
          headers: { "Content-type": "application/json" },
        });
        if (!response.ok) {
          console.error(`Error: ${response.status}`);
        }
      } catch (error) {
        console.error(error);
      }
      mutate();
    } else {
      try {
        const response = await fetch(`/api/tutorials/${_id}`, {
          method: "DELETE",
          body: JSON.stringify(user.email),
          headers: { "Content-type": "application/json" },
        });
        if (!response.ok) {
          console.error(`Error: ${response.status}`);
        }
      } catch (error) {
        console.error(error);
      }
      mutate();
    }
  }
  console.log(data);
  function handleEdit(event) {
    event.preventDefault();

    const notes = event.target.notes.value;
    const learning = event.target.learning.checked;
    const mastered = event.target.mastered.checked;

    // list.map((tutorial) => {
    //   if (tutorial._id === _id) {
    //     let updatedIsLearning = [];
    //     let updatedMastered = [];
    //     if (learning) {
    //       if (!tutorial.isLearning.includes(user.email)) {
    //         updatedIsLearning = [...tutorial.isLearning, user.email];
    //       } else {
    //         updatedIsLearning = tutorial.isLearning.filter(
    //           (email) => email !== user.email
    //         );
    //       }
    //     }
    //     if (mastered) {
    //       if (!tutorial.mastered.includes(user.email)) {
    //         updatedMastered = [...tutorial.mastered, user.email];
    //       } else {
    //         updatedMastered = tutorial.mastered.filter(
    //           (email) => email !== user.email
    //         );
    //       }
    //     }
    //     return {
    //       ...tutorial,
    //       notes,
    //       isLearning: updatedIsLearning,
    //       mastered: updatedMastered,
    //     };
    //   }
    //   console.log(tutorial);
    //   return tutorial;
    // });

    // try {
    //   const response = fetch(`/api/tutorials/${id}`, {
    //     method: "PUT",
    //     body: JSON.stringify(data),
    //     headers: { "Content-type": "application/json" },
    //   });

    //   if (response.ok) {
    //     event.target.reset();
    //     router.push("/");
    //   } else {
    //     console.error(`Error: ${response.status}`);
    //   }
    // } catch (error) {
    //   console.error(error);
    // }
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
        content={data}
        onToggle={handleToggleLike}
        onEdit={handleEdit}
      />
    </section>
  );
}
