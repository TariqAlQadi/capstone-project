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
