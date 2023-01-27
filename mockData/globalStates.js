import { atom } from "jotai";
import { advancedList } from "./advanced52";
import { beginnerList } from "./beginner52";
import { intermediateList } from "./intermediate52";
import { coin } from "./coin";

const list = [...beginnerList, ...intermediateList, ...advancedList, ...coin];

export const allTutorials = atom(list);
