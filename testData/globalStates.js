import { atom } from "jotai";
import { advancedList } from "./advanced52";
import { beginnerList } from "./beginner52";
import { intermediateList } from "./Intermediate52";
import { coin } from "./coin";
import { gimmickList } from "./gimmick";
import { madList } from "./mad";

//lists
const list = [
  ...beginnerList,
  ...intermediateList,
  ...advancedList,
  ...coin,
  ...gimmickList,
  ...madList,
];

export const allTutorials = atom(list);

//user
const user = { name: "Tariq", bio: "Magician" };

export const userObject = atom(user);
/*
const user = {name: "Tariq", bio: "Magician", favorites: ["ida", "idb"]}

const favorites = [
  {
    userId: "A",
    favoriteTricks: ["idA", "idB", "idC"],
    isLearning: ["idB"]
  }
]

Lottifiles - animierte svg`S


const userNextAuth = {
  name: "A",
  email: "adas@asd",
  image: "https://..."
}

const userInfos = [
  {
    userId: "asdsaddsa@asddsadsd",
    tricks: [{trickId: "idA", isLearning: false, hasMastered: true}, {trickId:"idB", isLearning: true}],
  }
]
*/
