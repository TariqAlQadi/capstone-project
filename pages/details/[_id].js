import CardDetails from "@/components/CardDetails";
import { useRouter } from "next/router";
import useSWR from "swr";
import { useState, useEffect } from "react";

export default function DetailsPage() {
  //logged-in state
  const [loggedInUser, setLoggedInUser] = useState({});
  const router = useRouter();
  const { _id } = router.query;

  //get logged-in user
  useEffect(() => {
    setLoggedInUser(JSON.parse(localStorage.getItem("loggedInUser")));
  }, []);
  const user = loggedInUser;
  //fetch tutorial
  const { data, mutate } = useSWR(`/api/tutorials/${_id}`);
  if (!data) {
    return <div>...is Loading</div>;
  }

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
