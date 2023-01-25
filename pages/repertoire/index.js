import CardList from "@/components/CardList";

export default function Repertoire() {
  // function toggleBookmark(id) {
  //   const BookmarkedArray = tutorials.map((tutorial) => {
  //     if (tutorial.id === id) {
  //       return {
  //         ...tutorial,
  //         isBookmarked: !tutorial.isBookmarked,
  //       };
  //     } else {
  //       return tutorial;
  //     }
  //   });
  //   setTutorials(newTutorialArray);
  // }

  return (
    <section>
      <h2>your Repertoire</h2>
      <CardList />
    </section>
  );
}
