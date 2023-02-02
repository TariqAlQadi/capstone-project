import { atom } from "jotai";
import { newAllTutorials } from "./NewAllTutorials";

//list
const list = newAllTutorials;
export const allTutorials = atom(list);

//users
const users = [
  {
    email: "tariqalqadi@gmx.de",
    password: "abc",
    name: "Tariq",
    img: "https://i.ytimg.com/vi/bCIMMl3e7dY/hqdefault.jpg",
    bio: "hallo ich bion tariq",
  },
  {
    email: "a@b",
    password: "def",
    name: "Niklas",
    img: "https://i.ytimg.com/vi/5n4ocBp3K0A/maxresdefault.jpg",
    bio: "Hallo ich bin niklas",
  },
];
export const allUsers = atom(users);

//current user
const initialUser = {
  email: "tariqalqadi@gmx.de",
  password: "abc",
  name: "Tariq",
  img: "https://i.ytimg.com/vi/bCIMMl3e7dY/hqdefault.jpg",
  bio: "Magician",
};
export const currentUser = atom(initialUser);
