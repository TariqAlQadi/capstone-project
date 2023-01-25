import { atom } from "jotai";
import { advancedList } from "./advanced52";
import { beginnerList } from "./beginner52";
import { intermediateList } from "./Intermediate52";

const list = [...beginnerList, ...intermediateList, ...advancedList];

export const allTutorials = atom(list);
