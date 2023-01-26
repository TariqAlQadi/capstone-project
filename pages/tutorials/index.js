import CardList from "@/components/CardList";
import { allTutorials } from "@/mockData/globalStates";
import { useAtom } from "jotai";
import { useState } from "react";

export default function HomePage() {
  const [list] = useAtom(allTutorials);

  //show list states
  const [showBeginner, setShowBeginner] = useState(false);
  const [showIntermediate, setShowIntermediate] = useState(false);
  const [showAdvanced, setShowAdvanced] = useState(false);
  const [showCoin, setShowCoin] = useState(false);

  //filtered by difficulty
  const beginnerList = list.filter(
    (category) => category.difficulty === "beginner"
  );
  const intermediateList = list.filter(
    (category) => category.difficulty === "intermediate"
  );
  const advancedList = list.filter(
    (category) => category.difficulty === "advanced"
  );
  const coinList = list.filter((category) => category.difficulty === "coin");

  return (
    <section>
      <h2>Beginner Tutorials:</h2>
      <button
        onClick={() => {
          setShowBeginner(!showBeginner);
        }}
      >
        Show List
      </button>
      {showBeginner && <CardList tutorials={beginnerList} />}

      <h2>Intermediate Tutorials:</h2>
      <button
        onClick={() => {
          setShowIntermediate(!showIntermediate);
        }}
      >
        Show List
      </button>
      {showIntermediate && <CardList tutorials={intermediateList} />}

      <h2>Advanced Tutorials:</h2>
      <button
        onClick={() => {
          setShowAdvanced(!showAdvanced);
        }}
      >
        Show List
      </button>
      {showAdvanced && <CardList tutorials={advancedList} />}

      <h2>Coin Tutorials:</h2>
      <button
        onClick={() => {
          setShowCoin(!showCoin);
        }}
      >
        Show List
      </button>
      {showCoin && <CardList tutorials={coinList} />}
    </section>
  );
}
