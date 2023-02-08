import CardDetails from "@/components/CardDetails";
import { useRouter } from "next/router";
import useSWR from "swr";

export default function DetailsPage() {
  const router = useRouter();
  const { _id } = router.query;

  const { data, mutate } = useSWR(`/api/tutorials/${_id}`);

  if (!data) {
    return <div>...is Loading</div>;
  }

  //get logged-in user
  const user = JSON.parse(localStorage.getItem("loggedInUser"));

  //pushes & pulls the user id on/off the isLiked/isLearning/mastered array
  async function handleToggleLike() {
    if (!data.isLiked.includes(user.email)) {
      try {
        const response = await fetch(`/api/tutorials/like/${_id}`, {
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
        const response = await fetch(`/api/tutorials/like/${_id}`, {
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

  async function handleToggleLearning() {
    if (!data.isLearning.includes(user.email)) {
      try {
        const response = await fetch(`/api/tutorials/learn/${_id}`, {
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
      try {
        const response = await fetch(`/api/tutorials/master/${_id}`, {
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
    } else {
      try {
        const response = await fetch(`/api/tutorials/learn/${_id}`, {
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

  async function handleToggleMastered() {
    if (!data.mastered.includes(user.email)) {
      try {
        const response = await fetch(`/api/tutorials/master/${_id}`, {
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
      try {
        const response = await fetch(`/api/tutorials/learn/${_id}`, {
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
    } else {
      try {
        const response = await fetch(`/api/tutorials/master/${_id}`, {
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
        onToggleLike={handleToggleLike}
        onToggleLearning={handleToggleLearning}
        onToggleMastered={handleToggleMastered}
      />
    </section>
  );
}
