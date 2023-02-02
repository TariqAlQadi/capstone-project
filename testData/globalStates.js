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

//users
const users = [
  {
    email: "tariqalqadi@gmx.de",
    password: "abc",
    name: "Tariq",
    bio: "Magician",
  },
  {
    email: "a@b",
    password: "def",
    name: "Niklas",
    bio: "Hallo ich bin niklas",
  },
];
export const allUsers = atom(users);

//current user
const initialUser = {
  email: "tariqalqadi@gmx.de",
  password: "abc",
  name: "Tariq",
  bio: "Magician",
};
export const currentUser = atom(initialUser);
