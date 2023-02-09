import CardDetails from "@/components/CardDetails";
import { useRouter } from "next/router";
import useSWR from "swr";
import { useState, useEffect } from "react";
import styled from "styled-components";

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

  //pushes & pulls the user email on & off the isLiked array
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
  //pushes & pulls the user email on & off the isLearning array
  async function handleToggleLearning() {
    if (!data.isLearning.includes(user.email)) {
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
  //pushes & pulls the user email on & off the mastered array
  async function handleToggleMastered() {
    if (!data.mastered.includes(user.email)) {
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
  //pushes & pulls note & user email on & off the notes array
  async function handleEditNote(event) {
    event.preventDefault();

    //get notes objects
    const [oldNoteObject] = data.notes.filter(
      (note) => note.user === user.email
    );
    const newNoteObject = { user: user.email, note: event.target.notes.value };

    try {
      const response = await fetch(`/api/tutorials/notes/${_id}`, {
        method: "DELETE",
        body: JSON.stringify(oldNoteObject),
        headers: { "Content-type": "application/json" },
      });
      if (!response.ok) {
        console.error(`Error: ${response.status}`);
      }
    } catch (error) {
      console.error(error);
    }

    try {
      const response = await fetch(`/api/tutorials/notes/${_id}`, {
        method: "PUT",
        body: JSON.stringify(newNoteObject),
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

  return (
    <StyledSection>
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
        onEditNote={handleEditNote}
      />
    </StyledSection>
  );
}

//styling
const StyledSection = styled.section`
  margin: 10px;
`;
