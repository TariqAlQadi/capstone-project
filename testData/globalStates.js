import { atom } from "jotai";
import { advancedList } from "./advanced52";
import { beginnerList } from "./beginner52";
import { intermediateList } from "./Intermediate52";
import { coin } from "./coin";
import { gimmickList } from "./gimmick";
import { madList } from "./mad";

const list = [
  ...beginnerList,
  ...intermediateList,
  ...advancedList,
  ...coin,
  ...gimmickList,
  ...madList,
];

export const allTutorials = atom(list);
