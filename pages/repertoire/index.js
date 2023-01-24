import CardList from "@/components/CardList";

export default function Repertoire({ tutorials, setTutorials }) {
  function toggleBookmark(id) {
    const BookmarkedArray = tutorials.map((tutorial) => {
      if (tutorial.id === id) {
        return {
          ...tutorial,
          isBookmarked: !tutorial.isBookmarked,
        };
      } else {
        return tutorial;
      }
    });
    setTutorials(newTutorialArray);
  }

  return (
    <section>
      <h2>your Repertoire</h2>
      {tutorials?.map((tutorial) => {
        if (tutorial.isBookmarked === true) {
          return (
            <>
              <CardList />
            </>
          );
        } else {
          return null;
        }
      })}
      {!tutorials.find((tutorial) => tutorial.isBookmarked === true) ? (
        <span>You have nothing added to your Repertoire!</span>
      ) : (
        ""
      )}
    </section>
  );
}
